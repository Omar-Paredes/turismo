<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Atractivo;
use App\Models\Seccion;
use App\Models\Atractivo_Seccion;
use App\Models\Actividad_Atractivo;
use App\Models\Atractivo_Empresa;
use Illuminate\Support\Facades\DB;

class AtractivoController extends Controller
{
    public function index()
    {
        $atractivos =  
            Atractivo::leftjoin('tipo_atractivos', 'tipo_atractivos.id', '=', 'atractivos.tipo_atractivo_id')
            ->leftjoin('ubicacions', 'ubicacions.id', '=', 'atractivos.ubicacion_id')
            ->leftjoin('estacionalidads', 'estacionalidads.id', '=', 'atractivos.estacionalidad_id')
            ->leftjoin('accesibilidads', 'accesibilidads.id', '=', 'atractivos.accesibilidad_id')
            ->select(
                'atractivos.id',
                'atractivos.nombre',
                'atractivos.codigo',
                'atractivos.descripcion',
                'atractivos.foto',
                'atractivos.imagen',
                'atractivos.video',
                'atractivos.destacado_mes',
                'atractivos.acompaniantes as acompaniantes',
                'atractivos.tipo_atractivo_id',
                'atractivos.estacionalidad_id',
                'atractivos.ubicacion_id',
                'atractivos.accesibilidad_id',
                'tipo_atractivos.id as id_tipo_atractivo',
                'tipo_atractivos.nombre as tipo_atractivo_nombre',
                'tipo_atractivos.descripcion as tipo_atractivo_descripcion',
                'ubicacions.id as id_ubicacion',
                'ubicacions.informacion',
                'ubicacions.calles',
                'ubicacions.altitud',
                'ubicacions.ubicacion_geografica',
                'estacionalidads.id as id_estacionalidad',
                'estacionalidads.temporada',
                'estacionalidads.horarios',
                'accesibilidads.id as id_accesibilidad',
                'accesibilidads.tipo_de_via',
                'accesibilidads.estado_de_via',
            )
            ->orderBy('id')
            ->get();

        return $atractivos;
    }


    public function showSeccionByUser($id)
    {
        $atractivos = DB::select(
            "SELECT 
            asub.id as id_subseccion, atr.id, atr.nombre, atr.codigo, atr.descripcion, atr.imagen, atr.video, atr.foto,
            atr.acompaniantes, atr.ubicacion_id, atr.accesibilidad_id, atr.estacionalidad_id
            from atractivo_subseccion asub, atractivos atr
            where sub_seccion_id=$id and asub.atractivo_id= atr.id
            and atr.tipo_atractivo_id IS NOT NULL
            and atr.accesibilidad_id IS NOT NULL
            and atr.ubicacion_id IS NOT NULL
            and atr.estacionalidad_id IS NOT NULL"
        );
    
        $seccion = DB::select("SELECT foto, nombre, descripcion FROM sub_seccions WHERE id='$id'")[0];
 
        return [
            "atractivos" => $atractivos,
            "seccion" => $seccion
        ];
    }

    public function store(Request $request)
    {
        return Atractivo::create($request->all()); 
    }

    public function show($id)
    {
        $atractivo = DB::select(
            "SELECT atrac.id, atrac.nombre, atrac.descripcion, atrac.imagen, atrac.video, atrac.foto,
            atrac.ubicacion_id,
            acc.tipo_de_via, acc.estado_de_via,
            ubi.distrito, ubi.calles, ubi.altitud, ubi.ubicacion_geografica,
            esta.temporada, esta.horarios, esta.hora_apertura, esta.hora_cierre,
            tiat.nombre as nombre_tipo_atractivo
            from atractivos atrac, tipo_atractivos tiat,
            accesibilidads acc, ubicacions ubi, estacionalidads esta
            where atrac.id = $id
            and atrac.tipo_atractivo_id = tiat.id
            and atrac.accesibilidad_id = acc.id
            and atrac.ubicacion_id = ubi.id
            and atrac.estacionalidad_id = esta.id"
        )[0];

        $actividades = DB::select(
            "SELECT a.nombre, a.descripcion, aa.estado
            FROM atractivo_actividad as aa, actividads as a
            WHERE aa.atractivo_id = $id AND aa.actividad_id = a.id"
        );

        $atractivo->actividades = $actividades;

        return $atractivo;
    }

    public function update(Request $request, $id)
    {
        $Atractivo = Atractivo::find($id);
        $Atractivo->update($request->all());
        return $Atractivo;
    }

    public function destroy($id)
    {
        return Atractivo::destroy($id);
    }

    // ---------------Atractivo Actividad---------------------------

    public function ObtenerActividadesNoAsignadas($id)
    {
        $getIdActividades = DB::Select("SELECT * FROM atractivo_actividad WHERE atractivo_id = $id"); //Obteniendo las secciones que tiene el atractivo
        $getIdAny = true;
        $condicion = "id!=";
        foreach ($getIdActividades as $idActividad) {
            $getIdAny = false;
            if ($idActividad != end($getIdActividades)) {
                $condicion = $condicion . ' ' . $idActividad->actividad_id . ' and ' . $condicion;
            } else {
                $condicion = $condicion . ' ' . $idActividad->actividad_id;
            }
        }
        if ($getIdAny) {
            $obtenerSeccionNoAsignada = DB::Select("SELECT nombre, id FROM actividads WHERE deleted_at IS NULL");
        } else {
            $obtenerSeccionNoAsignada = DB::Select("SELECT nombre, id FROM actividads WHERE deleted_at IS NULL and " . $condicion);
        }
        return $obtenerSeccionNoAsignada;
    }

    public function ObtenerActividadesAsignadas($id)
    {
        $getIdActividades = DB::Select("SELECT * FROM atractivo_actividad WHERE atractivo_id = $id"); //Obteniendo las Actividades que tiene el atractivo
        $getIdAny = true;

        $idActividades = "";
        foreach ($getIdActividades as $idActividad) {
            $getIdAny = false;
            if ($idActividad == end($getIdActividades)) {
                $idActividades = $idActividades . ' ' . $idActividad->actividad_id;
            } else {
                $idActividades = $idActividades . ' ' . $idActividad->actividad_id . ',';
            }
        }
        if ($getIdAny) {
            return  response()->json([
                'res' => true,
                'msg' => 'No tiene contenido'
            ], 204);
        } else {
            $obtenerActividadesAsignadas = DB::Select("SELECT id, nombre FROM actividads WHERE deleted_at IS NULL AND id in(" . $idActividades . ")");
        }
        return $obtenerActividadesAsignadas;
    }

    public function ObtenerActividadesAsignadasEstado($id)
    {
        $getIdActividades = DB::Select("SELECT * FROM atractivo_actividad WHERE atractivo_id = $id"); //Obteniendo las Actividades que tiene el atractivo
        $getIdAny = true;

        $idActividades = "";
        foreach ($getIdActividades as $idActividad) {
            $getIdAny = false;
            if ($idActividad == end($getIdActividades)) {
                $idActividades = $idActividades . ' ' . $idActividad->actividad_id;
            } else {
                $idActividades = $idActividades . ' ' . $idActividad->actividad_id . ',';
            }
        }
        if ($getIdAny) {
            return  response()->json([
                'res' => true,
                'msg' => 'No tiene contenido'
            ], 204);
        } else {
            $obtenerActividadesAsignadas = DB::Select(
                "SELECT atractivo_actividad.id, actividads.nombre, atractivo_actividad.estado FROM actividads 
                INNER JOIN atractivo_actividad ON actividads.id = atractivo_actividad.actividad_id
                WHERE atractivo_actividad.atractivo_id = $id AND actividads.deleted_at IS NULL AND actividads.id in(" . $idActividades . ")"
            );
        }
        return $obtenerActividadesAsignadas;
    }

    public function SaveActividadesNotAssign(Request $request)
    {
        $actividades = $request->actividades;

        foreach ($actividades as $actividad) {
            $atractivo_actividad = new Actividad_Atractivo();
            $atractivo_actividad->actividad_id = $actividad;
            $atractivo_actividad->atractivo_id = $request->id;
            $atractivo_actividad->estado = "habilitado";    //Cambiar migracion por un defalut
            $atractivo_actividad->save();
        }
        return response()->json([
            'res' => true,
            'msg' => 'Actividades Agregadas correctamente.'
        ], 200);
    }

    public function DeallocateActividades(Request $request)
    {
        $actividades = $request->actividades;

        foreach ($actividades as $actividad) {
            DB::delete("DELETE FROM atractivo_actividad WHERE actividad_id=$actividad AND atractivo_id=$request->id");
        }
        return response()->json([
            'res' => true,
            'msg' => 'Actividades Eliminadas correctamente.'
        ], 200);
    }

    public function updateEstado(Request $request, $id)
    {
        $actividad = Actividad_Atractivo::find($id);
        $actividad->update([
            $actividad->estado = $request->estado
        ]);
        return $actividad;
    }

    //---------------------------------- Relacion Atractivo Empresa -------------------------------------

    public function ObtenerEmpresasNoAsignadas($id)
    {
        $getIdEmpresas = DB::Select("SELECT * FROM atractivo_empresa WHERE atractivo_id = $id");
        $getIdAny = true;
        $condicion = "id!=";
        foreach ($getIdEmpresas as $idEmpresa) {
            $getIdAny = false;
            if ($idEmpresa != end($getIdEmpresas)) {
                $condicion = $condicion . ' ' . $idEmpresa->empresa_id . ' and ' . $condicion;
            } else {
                $condicion = $condicion . ' ' . $idEmpresa->empresa_id;
            }
        }
        if ($getIdAny) {
            $obtenerEmpresaNoAsignada = DB::Select("SELECT nombre, id FROM empresas WHERE deleted_at IS NULL");
        } else {
            $obtenerEmpresaNoAsignada = DB::Select("SELECT nombre, id FROM empresas WHERE deleted_at IS NULL and " . $condicion);
        }
        return $obtenerEmpresaNoAsignada;
    }

    public function ObtenerEmpresasAsignadas($id)
    {
        $getIdEmpresas = DB::Select("SELECT * FROM atractivo_empresa WHERE atractivo_id = $id"); //Obteniendo los atractivos que tiene esa empresa

        $getIdAny = true;
        $idEmpresas = "";
        foreach ($getIdEmpresas as $idEmpresa) {
            $getIdAny = false;
            if ($idEmpresa == end($getIdEmpresas)) {
                $idEmpresas = $idEmpresas . ' ' . $idEmpresa->empresa_id;
            } else {
                $idEmpresas = $idEmpresas . ' ' . $idEmpresa->empresa_id . ',';
            }
        }
        if ($getIdAny) {
            return  response()->json([
                'res' => true,
                'msg' => 'No tiene contenido'
            ], 204);
        } else {
            $obtenerEmpresaAsignada = DB::Select("SELECT id, nombre FROM empresas WHERE deleted_at IS NULL AND id in(" . $idEmpresas . ")");
        }
        return $obtenerEmpresaAsignada;
    }

    public function SaveEmpresasNotAssign(Request $request)
    {
        $empresas = $request->empresas;

        foreach ($empresas as $empresa) {
            $atractivo_empresa = new Atractivo_Empresa();
            $atractivo_empresa->empresa_id = $empresa;
            $atractivo_empresa->atractivo_id = $request->id;
            $atractivo_empresa->save();
        }
        return response()->json([
            'res' => true,
            'msg' => 'Empresas Agregadas correctamente.'
        ], 200);
    }

    public function DeallocateEmpresas(Request $request)
    {
        $empresas = $request->empresas;
        foreach ($empresas as $empresa) {
            DB::delete("DELETE FROM atractivo_empresa WHERE empresa_id=$empresa AND atractivo_id=$request->id");
        }
        return response()->json([
            'res' => true,
            'msg' => 'Empresas Eliminadas correctamente.'
        ], 200);
    }

    public function getDestacadoMes()
    {
        $atractivo = DB::select("SELECT * FROM atractivos WHERE destacado_mes=true AND deleted_at IS NULL");
        if($atractivo) {
            return $atractivo[0];
        }
    }

    public function changeDestacadoMes($id)
    {
        DB::update("UPDATE atractivos SET destacado_mes = false WHERE destacado_mes = true");
        DB::update("UPDATE atractivos SET destacado_mes = true WHERE id='$id'");
        return response()->json([
            'ok' => true,
            'msg' => 'Atractivo del mes actualizado correctamente.'
        ], 200);
    }

    public function getThreeAtractivosAvailables()
    {
        $atractivos = DB::select(
            "SELECT a.id, a.nombre, a.foto
            FROM atractivos as a, estacionalidads as e
            WHERE a.destacado_mes=false AND a.tipo_atractivo_id IS NOT NULL
            AND a.accesibilidad_id IS NOT NULL AND a.ubicacion_id IS NOT NULL
            AND a.estacionalidad_id IS NOT NULL AND e.horarios IS NULL 
            AND a.estacionalidad_id = e.id
            ORDER BY RANDOM() LIMIT 3"
        );

        return $atractivos;
    }

    public function getEventsAvailables()
    {
        $atractivos = DB::select(
            "SELECT a.id, a.nombre, a.foto, a.descripcion, e.horarios as fecha
            FROM atractivos as a, estacionalidads as e
            WHERE a.tipo_atractivo_id IS NOT NULL
            AND a.accesibilidad_id IS NOT NULL AND a.ubicacion_id IS NOT NULL
            AND a.estacionalidad_id IS NOT NULL AND e.horarios IS NOT NULL 
            AND a.estacionalidad_id = e.id"
        );

        return $atractivos;
    }
}

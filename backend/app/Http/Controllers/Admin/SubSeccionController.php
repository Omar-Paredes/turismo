<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubSeccion;
use App\Models\Atractivo_SubSeccion;
use Illuminate\Support\Facades\DB;

class SubSeccionController extends Controller
{
    public function index()
    {
        $sub_secciones = SubSeccion::select('sub_seccions.id', 'sub_seccions.nombre', 'sub_seccions.descripcion', 'sub_seccions.foto')->get();

        return $sub_secciones;
    }

    public function store(Request $request)
    {
        return SubSeccion::create($request->all());
    }

    public function show($id)
    {
        return SubSeccion::find($id);
    }

    public function update(Request $request, $id)
    {
        $sub_seccion = SubSeccion::find($id);
        $sub_seccion->update($request->all());
        return $sub_seccion;
    }

    public function destroy($id)
    {
        return SubSeccion::destroy($id);
    }

    //---------------------------------- Relacion Atractivo Subsecciones-------------------------------------

    public function ObtenerAtractivosNoAsignados($id) // obtener Atractivos no asignados
    {
        $getIdAtractivos = DB::Select("SELECT * FROM atractivo_subseccion WHERE sub_seccion_id = $id"); //Obteniendo los atractivos que tiene la seccion
        $getIdAny = true;
        $condicion = "id!=";
        foreach ($getIdAtractivos as $idAtractivo) {
            $getIdAny = false;
            if ($idAtractivo != end($getIdAtractivos)) {
                $condicion = $condicion . ' ' . $idAtractivo->atractivo_id . ' and ' . $condicion;
            } else {
                $condicion = $condicion . ' ' . $idAtractivo->atractivo_id;
            }
        }
        if ($getIdAny) {
            $obtenerSeccionNoAsignada = DB::Select("SELECT nombre, id FROM atractivos WHERE deleted_at IS NULL");
        } else {
            $obtenerSeccionNoAsignada = DB::Select("SELECT nombre, id FROM atractivos WHERE deleted_at IS NULL and " . $condicion);
        }
        return $obtenerSeccionNoAsignada;
    }

    public function ObtenerAtractivosAsignados($id) // obtener Atractivos asignados
    {
        $getIdAtractivos = DB::Select("SELECT * FROM atractivo_subseccion WHERE sub_seccion_id = $id"); //Obteniendo los atractivos que tiene la subseccion

        $getIdAny = true;
        $idAtractivos = "";
        foreach ($getIdAtractivos as $idAtractivo) {
            $getIdAny = false;
            if ($idAtractivo == end($getIdAtractivos)) {
                $idAtractivos = $idAtractivos . ' ' . $idAtractivo->atractivo_id;
            } else {
                $idAtractivos = $idAtractivos . ' ' . $idAtractivo->atractivo_id . ',';
            }
        }
        if ($getIdAny) {
            return  response()->json([
                'res' => true,
                'msg' => 'No tiene contenido'
            ], 204);
        } else {
            $obtenerAtractivoAsignada = DB::Select("SELECT id, nombre FROM atractivos WHERE deleted_at IS NULL AND id in(" . $idAtractivos . ")");
        }
        return $obtenerAtractivoAsignada;
    }




    public function SaveAtractivosNotAssign(Request $request)
    {
        $atractivos = $request->atractivos;

        foreach ($atractivos as $atractivo) {
            $atractivo_subseccion = new Atractivo_SubSeccion();
            $atractivo_subseccion->atractivo_id = $atractivo;
            $atractivo_subseccion->sub_seccion_id = $request->id;
            $atractivo_subseccion->save();
        }
        return response()->json([
            'res' => true,
            'msg' => 'Atractivos Agregados correctamente.'
        ], 200);
    }

    public function DeallocateAtractivos(Request $request)
    {
        $atractivos = $request->atractivos;
        foreach ($atractivos as $atractivo) {
            DB::delete("DELETE FROM atractivo_subseccion WHERE atractivo_id=$atractivo AND sub_seccion_id=$request->id");
        }
        return response()->json([
            'res' => true,
            'msg' => 'Atractivos Eliminados correctamente.'
        ], 200);
    }
}

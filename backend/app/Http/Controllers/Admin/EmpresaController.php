<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Empresa;
use App\Models\TipoEmpresa;
use App\Models\Ubicacion;
use Illuminate\Support\Facades\DB;

class EmpresaController extends Controller
{
   /*  public function index() 
    {
        $empresas = Empresa::
        join('tipo_empresas', 'tipo_empresas.id', '=' , 'empresas.tipo_empresa_id')
        ->join('ubicacions', 'ubicacions.id', '=' , 'empresas.ubicacion_id')
        ->select(
        'empresas.id','empresas.nombre','empresas.especialidad','empresas.foto','empresas.ubicacion_id','empresas.tipo_empresa_id',
        'tipo_empresas.nombre as nombre_tipo_empresa','tipo_empresas.servicio','tipo_empresas.descripcion',
        'ubicacions.id as id_tipo_ubicacion','ubicacions.informacion','ubicacions.distrito','ubicacions.calles','ubicacions.altitud','ubicacions.ubicacion_geografica'
        )->get();
        foreach($empresas as $empresa) {
            $empresa -> foto = stream_get_contents($empresa -> foto);
        }
        return $empresas;
    }

    public function store(Request $request)
    {
        return Empresa::create($request->all());
    }

    public function show($id)
    {
        return Empresa::find($id);
    }

    public function update(Request $request, $id)
    {
        $Empresa = Empresa::find($id);
        $Empresa->update($request->all());
        return $Empresa;
    }

    public function destroy($id)
    {
        $delete = DB::delete("delete from empresas where id=$id");
        return $delete;
    }

    public function showToUser($type){
        $showBussines = DB::select("select ep.nombre, ep.especialidad, ep.foto, ep.ubicacion_id, ep.tipo_empresa_id,
        te.nombre as nombre_tipo_empresa, te.servicio, te.descripcion from empresas ep, tipo_empresas te WHERE
        ep.tipo_empresa_id = te.id and LOWER(te.nombre) = LOWER('$type')");
        foreach($showBussines as $showBussine) {
            $showBussine -> foto = stream_get_contents($showBussine -> foto);
        }
        return $showBussines;
    } */

}

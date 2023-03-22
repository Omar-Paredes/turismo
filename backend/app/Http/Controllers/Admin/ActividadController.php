<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Actividad;
use App\Models\TipoActividad;
use App\Models\Actividad_Atractivo;
use App\Models\Atractivo;
use Illuminate\Support\Facades\DB;

class ActividadController extends Controller
{

    public function index()
    {
        $actividades = DB::select("SELECT * FROM actividads WHERE deleted_at IS NULL ORDER BY id");
        return $actividades;

    }

    public function store(Request $request)
    {
        return Actividad::create($request->all());
    }

    public function show($id)
    {
        return Actividad::find($id);
    }

    public function update(Request $request, $id)
    {
        $Empresa = Actividad::find($id);
        $Empresa->update($request->all());
        return $Empresa;
    }

    public function destroy($id)
    {
        $object = Actividad::findOrFail($id);
        return $object->forceDelete();
    }

    public function traer()
    {
        $actividades =  Actividad::join('tipo_actividads', 'tipo_actividads.id', '=' , 'actividads.tipo_actividad_id')
        ->select(
        'actividads.id','actividads.nombre','actividads.descripcion','actividads.tipo_actividad_id',
        'tipo_actividads.tipo as tipo_tipo_actividades','tipo_actividads.id as id_tipo_actividades',
        )->inRandomOrder()->limit(4)->get();

        return $actividades;
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accesibilidad;
use App\Models\Atractivo;

class AccesibilidadController extends Controller
{

    public function index()
    {
        return Accesibilidad::all();
    }


    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return Accesibilidad::create($request->all());
    }

    public function show($id)
    {
        return Accesibilidad::find($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $accesibilidad = Accesibilidad::find($id);
        $accesibilidad->update($request->all());
        return $accesibilidad;
    }

    public function destroy($id)
    {
        $object = Accesibilidad::findOrFail($id);

        $atractivoDestacado = Atractivo::where('accesibilidad_id', $id)->where('destacado_mes', true)->first();
        if($atractivoDestacado) {
            $atractivoDestacado->destacado_mes = false;
            $atractivoDestacado->save();
        }

        return $object->forceDelete();
    }
}

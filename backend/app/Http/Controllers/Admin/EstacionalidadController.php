<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Atractivo;
use Illuminate\Http\Request;
use App\Models\Estacionalidad;


class EstacionalidadController extends Controller
{

    public function index()
    {
        return Estacionalidad::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return Estacionalidad::create($request->all());
    }

    public function show($id)
    {
        return Estacionalidad::find($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $estacionalidad = Estacionalidad::find($id);
        $estacionalidad -> update($request->all());
        return $estacionalidad;
    }

    public function destroy($id)
    {
        $object = Estacionalidad::findOrFail($id);

        $atractivoDestacado = Atractivo::where('estacionalidad_id', $id)->where('destacado_mes', true)->first();
        if($atractivoDestacado) {
            $atractivoDestacado->destacado_mes = false;
            $atractivoDestacado->save();
        }

        return $object->forceDelete();
    }
}

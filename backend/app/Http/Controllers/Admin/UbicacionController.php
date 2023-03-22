<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Atractivo;
use App\Models\Ubicacion;
use Illuminate\Http\Request;

class UbicacionController extends Controller
{
    public function index()
    {
        return Ubicacion::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return Ubicacion::create($request->all());
    }

    public function show($id)
    {
        return Ubicacion::find($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $ubicacion = Ubicacion::find($id);
        $ubicacion->update($request->all());
        return $ubicacion;
    }

    public function destroy($id)
    {
        $object = Ubicacion::findOrFail($id);

        $atractivoDestacado = Atractivo::where('ubicacion_id', $id)->where('destacado_mes', true)->first();
        if($atractivoDestacado) {
            $atractivoDestacado->destacado_mes = false;
            $atractivoDestacado->save();
        }
        
        return $object->forceDelete();
    }
}

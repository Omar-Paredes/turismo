<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Atractivo;
use Illuminate\Http\Request;
use App\Models\TipoAtractivo;

class TipoAtractivoController extends Controller
{

    public function index()
    {
        return TipoAtractivo::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return TipoAtractivo::create($request->all());
    }


    public function show($id)
    {
        return TipoAtractivo::find($id);
    }


    public function edit(TipoAtractivo $tipoActividad)
    {
        
    }

    public function update(Request $request, $id) 
    {
        $TipoAct = TipoAtractivo::find($id);
        $TipoAct->update($request->all());
        return $TipoAct;
    }

    public function destroy($id)
    {
        $object = TipoAtractivo::findOrFail($id);

        $atractivoDestacado = Atractivo::where('tipo_atractivo_id', $id)->where('destacado_mes', true)->first();
        if($atractivoDestacado) {
            $atractivoDestacado->destacado_mes = false;
            $atractivoDestacado->save();
        }
        
        return $object->forceDelete();
    }
}

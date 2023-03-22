<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Restriccion;
use App\Models\TipoRestriccion;

class RestriccionController extends Controller
{

    public function index()
    {
        return  Restriccion::join('tipo_restriccions', 'tipo_restriccions.id', '=' , 'restriccions.tipo_restriccion_id')
        ->select(
        'restriccions.id','restriccions.nombre','restriccions.tipo_restriccion_id',
        'tipo_restriccions.id as id_tipo_restriccion' ,'tipo_restriccions.nombre as nombre_tipo_restriccion',
        )->get();

        return TipoRestriccion::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return Restriccion::create($request->all());
    }

    public function show($id)
    {
        return Restriccion::find($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $restriccion = Restriccion::find($id);
        $restriccion->update($request->all());
        return $restriccion;
    }

    public function destroy($id)
    {
        return Restriccion::destroy($id);
    }
}

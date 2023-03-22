<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TipoRestriccion;

class TipoRestriccionController extends Controller
{

    public function index()
    {
        return TipoRestriccion::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return TipoRestriccion::create($request->all());
    }

    public function show($id)
    {
        return TipoRestriccion::find($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $restriccion = TipoRestriccion::find($id);
        $restriccion -> update($request->all());
        return $restriccion;
    }

    public function destroy($id)
    {
        return TipoRestriccion::destroy($id);
    }
}

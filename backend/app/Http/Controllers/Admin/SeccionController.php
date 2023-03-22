<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Seccion;

class SeccionController extends Controller
{

   /*  public function index()
    {
        $secciones = Seccion::all();
        foreach($secciones as $seccion) {
            $seccion -> foto = stream_get_contents($seccion -> foto);
            $seccion -> videos = stream_get_contents($seccion -> videos);
        }
        return $secciones;
    }

    public function store(Request $request)
    {
        return Seccion::create($request->all());
    }

    public function show($id)
    {
        return Seccion::find($id);
    }


    public function update(Request $request, $id)
    {
        $seccion = Seccion::find($id);
        $seccion -> update($request->all());
        return $seccion;
    }

    public function destroy($id)
    {
        return Seccion::destroy($id);
    } */


}

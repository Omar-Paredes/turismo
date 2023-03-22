<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\EstacionalidadController;
use App\Http\Controllers\Admin\AccesibilidadController;
use App\Http\Controllers\Admin\TipoEmpresaController;
use App\Http\Controllers\Admin\EmpresaController;
use App\Http\Controllers\Admin\TipoRestriccionController;
use App\Http\Controllers\Admin\UbicacionController;
use App\Http\Controllers\Admin\TipoActividadController;
use App\Http\Controllers\Admin\TipoAtractivoController;
use App\Http\Controllers\Admin\SeccionController;
use App\Http\Controllers\Admin\SubSeccionController;
use App\Http\Controllers\Admin\RestriccionController;
use App\Http\Controllers\Admin\ActividadController;
use App\Http\Controllers\Admin\AtractivoController;
use App\Http\Controllers\Login\UserController;



//-------------------------Login-Register--------------------------------//
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/usuarios', [UserController::class, 'index']);
Route::put('/usuarios/{id}', [UserController::class, 'update']);

//-----------------------Estacionalidad-----------------------------------//
//Obtener todo los datos Tabla Estacionalidad
Route::get('/estacionalidad', [EstacionalidadController::class, 'index']);

//Insertar dato Tabla Estacionalida
Route::post('/estacionalidad', [EstacionalidadController::class, 'store']);

//Actualilzar dato Tabla Estacionalidad
Route::put('/estacionalidad/{id}', [EstacionalidadController::class, 'update']);

//Eliminar dato Tabla Estacionalidad
Route::delete('/estacionalidad/{id}', [EstacionalidadController::class, 'destroy']);

//Mostrar dato Tabla Estacionalidad
Route::get('/estacionalidad/{id}', [EstacionalidadController::class, 'show']);


//----------------------Rutas Accesibilidad--------------------------//

//Obtener todo los datos Tabla accesibilidad
Route::get('/accesibilidad', [AccesibilidadController::class, 'index']);

//Insertar dato Tabla accesibilidad
Route::post('/accesibilidad', [AccesibilidadController::class, 'store']);

//Actualilzar dato Tabla accesibilidad
Route::put('/accesibilidad/{id}', [AccesibilidadController::class, 'update']);

//Eliminar dato Tabla accesibilidad
Route::delete('/accesibilidad/{id}', [AccesibilidadController::class, 'destroy']);

//Mostrar dato Tabla accesibilidad
Route::get('/accesibilidad/{id}', [AccesibilidadController::class, 'show']);

//----------------------Rutas Tipo Empresa--------------------------//

//Obtener todo los datos Tabla tipo_empresa
Route::get('/tipo_empresa', [TipoEmpresaController::class, 'index']);

//Insertar dato Tabla tipo_empresa
Route::post('/tipo_empresa', [TipoEmpresaController::class, 'store']);

//Actualilzar dato Tabla tipo_empresa
Route::put('/tipo_empresa/{id}', [TipoEmpresaController::class, 'update']);

//Eliminar dato Tabla tipo_empresa
Route::delete('/tipo_empresa/{id}', [TipoEmpresaController::class, 'destroy']);

//Mostrar dato Tabla tipo_empresa
Route::get('/tipo_empresa/{id}', [TipoEmpresaController::class, 'show']);


//----------------------Rutas Tipo Restriccion (No Entra)--------------------------//

//Obtener todo los datos Tabla accesibilidad
// Route::get('/tipo_restriccion',[TipoRestriccionController::class, 'index']);

//Insertar dato Tabla accesibilidad
// Route::post('/tipo_restriccion',[TipoRestriccionController::class, 'store']);

//Actualilzar dato Tabla accesibilidad
// Route::put('/tipo_restriccion/{id}',[TipoRestriccionController::class, 'update']);

//Eliminar dato Tabla accesibilidad
// Route::delete('/tipo_restriccion/{id}',[TipoRestriccionController::class, 'destroy']);

//Mostrar dato Tabla accesibilidad
// Route::get('/tipo_restriccion/{id}',[TipoRestriccionController::class, 'show']);


//----------------------Rutas Empresa--------------------------//

//Obtener todo los datos Tabla Empresa
Route::get('/empresa', [EmpresaController::class, 'index']);

//Insertar dato Tabla empresa
Route::post('/empresa', [EmpresaController::class, 'store']);

//Actualilzar dato Tabla empresa
Route::put('/empresa/{id}', [EmpresaController::class, 'update']);

//Eliminar dato Tabla empresa
Route::delete('/empresa/{id}', [EmpresaController::class, 'destroy']);

//Mostrar dato Tabla empresa
Route::get('/empresa/{id}', [EmpresaController::class, 'show']);

//Show to the user the bussines 
Route::get('/empresa-user/{type}', [EmpresaController::class, 'showToUser']);

//----------------------Rutas Ubicacion--------------------------//

//Obtener todo los datos Tabla ubicaciones
Route::get('/ubicacion', [UbicacionController::class, 'index']);

//Insertar dato Tabla ubicaciones
Route::post('/ubicacion', [UbicacionController::class, 'store']);

//Actualilzar dato Tabla ubicaciones
Route::put('/ubicacion/{id}', [UbicacionController::class, 'update']);

//Eliminar dato Tabla ubicaciones
Route::delete('/ubicacion/{id}', [UbicacionController::class, 'destroy']);

//Mostrar dato Tabla ubicaciones
Route::get('/ubicacion/{id}', [UbicacionController::class, 'show']);

//----------------------Rutas Tipo  Actividad--------------------------//

//Obtener todo los datos Tabla tipo_actividad
Route::get('/tipo_actividad', [TipoActividadController::class, 'index']);

//Insertar dato Tabla tipo_actividad
Route::post('/tipo_actividad', [TipoActividadController::class, 'store']);

//Actualilzar dato Tabla tipo_actividad
Route::put('/tipo_actividad/{id}', [TipoActividadController::class, 'update']);

//Eliminar dato Tabla tipo_actividad
Route::delete('/tipo_actividad/{id}', [TipoActividadController::class, 'destroy']);

//Mostrar dato Tabla tipo_actividad
Route::get('/tipo_actividad/{id}', [TipoActividadController::class, 'show']);

//----------------------Rutas Tipo Atractivo--------------------------//

//Obtener todo los datos Tabla tipo_atractivo
Route::get('/tipo_atractivo', [TipoAtractivoController::class, 'index']);

//Insertar dato Tabla tipo_atractivo
Route::post('/tipo_atractivo', [TipoAtractivoController::class, 'store']);

//Actualilzar dato Tabla tipo_atractivo
Route::put('/tipo_atractivo/{id}', [TipoAtractivoController::class, 'update']);

//Eliminar dato Tabla tipo_atractivoipo 
Route::delete('/tipo_atractivo/{id}', [TipoAtractivoController::class, 'destroy']);

//Mostrar dato Tabla tipo_atractivo
Route::get('/tipo_atractivo/{id}', [TipoAtractivoController::class, 'show']);


//----------------------Rutas Seccion--------------------------//

//Obtener todo los datos Tabla Seccion
Route::get('/seccion', [SeccionController::class, 'index']);

//Insertar dato Tabla Seccion
Route::post('/seccion', [SeccionController::class, 'store']);

//Actualilzar dato Tabla Seccion
Route::put('/seccion/{id}', [SeccionController::class, 'update']);

//Eliminar dato Tabla Seccion
Route::delete('/seccion/{id}', [SeccionController::class, 'destroy']);

//Mostrar dato Tabla Seccion
Route::get('/seccion/{id}', [SeccionController::class, 'show']);


//----------------------Rutas Sub Seccion--------------------------//

//Obtener todo los datos Tabla Seccion
Route::get('/sub_seccion', [SubSeccionController::class, 'index']);

//Insertar dato Tabla Seccion
Route::post('/sub_seccion', [SubSeccionController::class, 'store']);

//Actualilzar dato Tabla Seccion
Route::put('/sub_seccion/{id}', [SubSeccionController::class, 'update']);

//Eliminar dato Tabla Seccion
Route::delete('/sub_seccion/{id}', [SubSeccionController::class, 'destroy']);

//Mostrar dato Tabla Seccion
Route::get('/sub_seccion/{id}', [SubSeccionController::class, 'show']);


//----------------------Rutas Restriccion--------------------------//

//Obtener todo los datos Tabla Restriccion
// Route::get('/restriccion', [RestriccionController::class, 'index']);

//Insertar dato Tabla restriccion
// Route::post('/restriccion', [RestriccionController::class, 'store']);

//Actualilzar dato Tabla restriccion
// Route::put('/restriccion/{id}', [RestriccionController::class, 'update']);

//Eliminar dato Tabla restriccion
// Route::delete('/restriccion/{id}', [RestriccionController::class, 'destroy']);

//Mostrar dato Tabla restriccion
// Route::get('/restriccion/{id}', [RestriccionController::class, 'show']);

//----------------------Rutas Actividad --------------------------//

//Obtener todo los datos Tabla actvidad
Route::get('/actividad', [ActividadController::class, 'index']);

//Insertar dato Tabla actividad
Route::post('/actividad', [ActividadController::class, 'store']);

//Actualilzar dato Tabla actividad
Route::put('/actividad/{id}', [ActividadController::class, 'update']);

//Eliminar dato Tabla actividad
Route::delete('/actividad/{id}', [ActividadController::class, 'destroy']);

//Mostrar dato Tabla actividad
Route::get('/actividad/{id}', [ActividadController::class, 'show']);

//Mostrar datos al usuario
Route::get('/actividad-user', [ActividadController::class, 'traer']);

//----------------------Rutas Atractivo --------------------------//

//Obtener todo los datos Tabla atractivo
Route::get('/atractivo', [AtractivoController::class, 'index']);

//Insertar dato Tabla atractivo
Route::post('/atractivo', [AtractivoController::class, 'store']);

//Actualilzar dato Tabla atractivo
Route::put('/atractivo/{id}', [AtractivoController::class, 'update']);

//Eliminar dato Tabla atractivo
Route::delete('/atractivo/{id}', [AtractivoController::class, 'destroy']);

//Mostrar dato Tabla atractivo
Route::get('/atractivo/{id}', [AtractivoController::class, 'show']);

//Show the activitys to the user's
Route::get('/atractivo-user/{id}', [AtractivoController::class, 'showSeccionByUser']);

//Cambiar atractivo destacado del mes
Route::get('/destacar/mes/', [AtractivoController::class, 'getDestacadoMes']);
Route::put('/destacar/mes/{id}', [AtractivoController::class, 'changeDestacadoMes']);
Route::get('/tres/atractivo/', [AtractivoController::class, 'getThreeAtractivosAvailables']);
Route::get('/eventos', [AtractivoController::class, 'getEventsAvailables']);

//--------------------Relacion Atractivo_SubSeccion-----------------------//
Route::get('/atractivo_secciones_noAsignadas/{id}', [SubSeccionController::class, 'ObtenerAtractivosNoAsignados']);
Route::post('/atractivo_secciones_noAsignadas', [SubSeccionController::class, 'SaveAtractivosNotAssign']);

Route::get('/atractivo_secciones_asignadas/{id}', [SubSeccionController::class, 'ObtenerAtractivosAsignados']);
Route::post('/atractivo_secciones_asignadas', [SubSeccionController::class, 'DeallocateAtractivos']);

//--------------------Relacion Atractivo_Actividad-----------------------//
Route::get('/atractivo_actividad_noAsignados/{id}', [AtractivoController::class, 'ObtenerActividadesNoAsignadas']);
Route::post('/atractivo_actividad_noAsignados', [AtractivoController::class, 'SaveActividadesNotAssign']);

Route::get('/atractivo_actividad_asignados/{id}', [AtractivoController::class, 'ObtenerActividadesAsignadas']);
Route::post('/atractivo_actividad_asignados', [AtractivoController::class, 'DeallocateActividades']);

Route::get('/atractivo_actividad_asignados_estado/{id}', [AtractivoController::class, 'ObtenerActividadesAsignadasEstado']);
Route::put('/atractivo_actividad_asignados_estado/{id}', [AtractivoController::class, 'updateEstado']);

//--------------------Relacion Atractivo_Empresa-----------------------//
Route::get('/atractivo_empresa_noAsignados/{id}', [AtractivoController::class, 'ObtenerEmpresasNoAsignadas']);
Route::post('/atractivo_empresa_noAsignados', [AtractivoController::class, 'SaveEmpresasNotAssign']);

Route::get('/atractivo_empresa_asignados/{id}', [AtractivoController::class, 'ObtenerEmpresasAsignadas']);
Route::post('/atractivo_empresa_asignados', [AtractivoController::class, 'DeallocateEmpresas']);
 
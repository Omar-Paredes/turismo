<?php

namespace App\Http\Controllers\Login;

Use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;

class UserController extends Controller
{
    /*
    /// permisos de administrador///

    public function __construct()
    {
        $this->middleware('auth');
    }*/

    public function register(Request $request){
        $user = User::where('email', $request['email'])->first();

        if ($user) {
            $response['status'] = 0;
            $response['message'] = 'Ya existe el correo electrónico.';
            $response['code'] = 409;
        }
        else{
            $user = User::Create([
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);
            $response['status'] = 1;
            $response['message'] = 'Usuario registrado correctamente.';
            $response['code'] = 200;
        }
        return response()->json($response);  
    }

    public function login(Request $request){
        $credentials = $request ->only('email','password');
        try {
            if (!JWTAuth::attempt($credentials)) {
                $response['status'] = 0;
                $response['code'] = 401;
                $response['data'] = null;
                $response['message'] = 'Contraseña o Correo electrónico incorrecto.';
                return response()->json($response);
            }
        } catch (JWTException $e) {
            $response['data'] = null;
            $response['code'] = 500;
            $response['message'] = 'No se pudo crear el Token';
            return response()->json($response);
        }
        $user = auth()->user();
        if ($user->estado == true) {
            $data['token'] = auth()->claims([
                'user_id' => $user->id,
                'email' => $user->email,
            ])->attempt($credentials);
    
            $response['data'] = $data;
            $response['status'] = 1;
            $response['code'] = 200;
            $response['message'] = 'Sesion Iniciada';
           /*  return response()->json($response); */
           return response()->json([$response, $user]);
        }
        else {
            $response['status'] = 0;
            $response['data'] = null;
            $response['message'] = 'Usuario no se encuentra habilitado.';
            return response()->json($response);
        }
    }

    public function index()
    {
        return User::orderBy('id')->get();
    }
    
    public function update(Request $request, $id)
    {
        $usuario = User::find($id);
        $usuario->update([
            $usuario->estado = $request->estado 
        ]);
        return $usuario;
    }

    public function destroy($id)
    {
        return User::destroy($id);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Atractivo extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'atractivos';
    protected $fillable = [
        'nombre',
        'codigo', 
        'descripcion',
        'foto',
        'imagen',
        'video',
        'tipo_atractivo_id',
        'acompaniantes',
        'ubicacion_id',
        'estacionalidad_id',
        'accesibilidad_id',
        'destacado_mes'
    ];

    public function SeccionR(){
        return $this->belongsToMany(Seccion::class,'atractivo_seccion');
    }

    public function ActividadAt(){
        return $this->belongsToMany(Actividad::class,'atractivo_actividad');
    }

}

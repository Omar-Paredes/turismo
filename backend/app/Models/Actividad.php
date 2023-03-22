<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'actividads';
    protected $fillable = [
        'nombre',
        'descripcion',
 /*        'foto', */
/*         'video', */
/*         'tipo_actividad_id', */
    ];

    public function AtractivoAct(){
        return $this->belongsToMany(Atractivo::class,'atractivo_actividad');
    }

}

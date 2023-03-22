<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Restriccion extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'restriccions';
    protected $fillable = [
        'nombre',
        'tipo_restriccion_id',
    ];

    public function tipo_restriccion(){
        return $this->belongsTo(TipoRestriccion::class, 'tipo_restriccion_id'); // belongsTo se utiliza cuando existe una llave foranea
    }

    public function actividades(){
        return $this->belongsToMany(Actividad::class, 'actividad_restriccion')->withTimestamps();
    }
}

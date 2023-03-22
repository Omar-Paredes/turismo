<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class TipoRestriccion extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'tipo_restriccions';
    protected $fillable = [
        'nombre'
    ];
    public function restricciones(){
        return $this->hasMany(Restriccion::class, 'id');
    }
}

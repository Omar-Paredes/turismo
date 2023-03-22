<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Accesibilidad extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'accesibilidads';
    protected $fillable = [
        'tipo_de_via',
        'estado_de_via',
    ];
}

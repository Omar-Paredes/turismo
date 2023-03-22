<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Estacionalidad extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'temporada',
        'horarios',
        'hora_apertura',
        'hora_cierre'
    ];
}

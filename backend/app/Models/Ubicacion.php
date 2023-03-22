<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Ubicacion extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'informacion',
        'distrito',
        'calles',
        'altitud',
        'ubicacion_geografica'
    ];
}

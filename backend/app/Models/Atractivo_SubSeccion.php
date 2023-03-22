<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Atractivo_SubSeccion extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'atractivo_subseccion';
    protected $fillable = [
        'atractivo_id', 
        'sub_seccion_id',
    ];
}

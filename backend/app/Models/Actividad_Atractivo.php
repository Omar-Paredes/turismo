<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Actividad_Atractivo extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'atractivo_actividad';
    protected $fillable = [
        'atractivo_id', 
        'actividad_id',
        'estado'
    ];
}

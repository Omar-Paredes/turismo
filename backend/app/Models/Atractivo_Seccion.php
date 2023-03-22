<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Atractivo_Seccion extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'atractivo_seccion';
    protected $fillable = [
        'atractivo_id', 
        'seccion_id',
    ];
}

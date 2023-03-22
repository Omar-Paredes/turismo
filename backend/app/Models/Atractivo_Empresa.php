<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Atractivo_Empresa extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'atractivo_empresa';
    protected $fillable = [
        'atractivo_id', 
        'empresa_id',
    ];
}

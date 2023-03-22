<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class TipoEmpresa extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'tipo_empresas';
    protected $fillable = [
        'nombre',
        'servicio',
        'descripcion',
    ];

    public function empresas(){
        return $this->hasMany(Empresa::class, 'id');
    }
}

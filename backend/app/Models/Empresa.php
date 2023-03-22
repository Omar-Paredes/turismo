<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'empresas';
    protected $fillable = [
        'nombre',
        'especialidad',
        'foto',
        'ubicacion_id',
        'tipo_empresa_id',
    ];

    public function tipo_empresa(){
        return $this->belongsTo(TipoEmpresa::class, 'tipo_empresa_id'); // belongsTo se utiliza cuando existe una llave foranea
    }

    // public function AtractivoEmp(){
    //     return $this->belongsToMany(Atractivo::class,'atractivo_empresa');
    // }
}

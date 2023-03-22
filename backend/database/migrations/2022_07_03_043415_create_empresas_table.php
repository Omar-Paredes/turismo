<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {/* 
        Schema::create('empresas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 50);
            $table->string('especialidad', 200);
            $table->binary('foto');
            $table->foreignId('ubicacion_id')->nullable()->constrained('ubicacions')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('tipo_empresa_id')->nullable()->constrained('tipo_empresas')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        }); */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresas');
    }
}

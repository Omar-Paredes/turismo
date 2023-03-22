<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoEmpresasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      /*   Schema::create('tipo_empresas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 50);
            $table->string('servicio',100);
            $table->string('descripcion',50000);
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
        Schema::dropIfExists('tipo_empresas');
    }
}

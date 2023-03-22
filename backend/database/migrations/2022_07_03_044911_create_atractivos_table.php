<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtractivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atractivos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 50);
            $table->string('codigo', 20);
            $table->string('descripcion', 50000);
            $table->string('imagen', 200);
            $table->string('video', 200);
            $table->string('acompaniantes', 50)->nullable();
            $table->foreignId('tipo_atractivo_id')->nullable()->constrained('tipo_atractivos')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('ubicacion_id')->nullable()->constrained('ubicacions')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('accesibilidad_id')->nullable()->constrained('accesibilidads')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('estacionalidad_id')->nullable()->constrained('estacionalidads')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('atractivos');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActividadRestriccionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actividad_restriccion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('actividad_id')->nullable()->constrained('actividads')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('restriccion_id')->nullable()->constrained('restriccions')->cascadeOnUpdate()->cascadeOnDelete();
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
        Schema::dropIfExists('actividad_restriccion');
    }
}

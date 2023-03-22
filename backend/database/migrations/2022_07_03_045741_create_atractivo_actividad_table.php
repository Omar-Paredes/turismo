<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtractivoActividadTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atractivo_actividad', function (Blueprint $table) {
            $table->id();
            $table->foreignId('atractivo_id')->nullable()->constrained('atractivos')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('actividad_id')->nullable()->constrained('actividads')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('estado')->nullable();
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
        Schema::dropIfExists('atractivo_actividad');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtractivoSubseccionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atractivo_subseccion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('atractivo_id')->nullable()->constrained('atractivos')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('sub_seccion_id')->nullable()->constrained('sub_seccions')->cascadeOnUpdate()->cascadeOnDelete();
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
        Schema::dropIfExists('atractivo_subseccion');
    }
}

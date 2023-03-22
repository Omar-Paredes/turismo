<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubSeccionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_seccions', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 50);
            $table->string('descripcion', 50000);
            $table->string('foto', 200);
/*             $table->binary('videos')->nullable(); */
  /*           $table->string('links', 100)->nullable(); */
         /*    $table->foreignId('id_seccion')->nullable()->constrained('seccions')->cascadeOnUpdate()->cascadeOnDelete(); */
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
        Schema::dropIfExists('sub_seccions');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtractivoSeccionTable extends Migration
{

            //-----------------------No estamos usando esta tabla------------------------//

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('atractivo_seccion', function (Blueprint $table) {
            $table->id();
            $table->foreignId('atractivo_id')->nullable()->constrained('atractivos')->cascadeOnUpdate()->cascadeOnDelete();
/*             $table->foreignId('seccion_id')->nullable()->constrained('seccions')->cascadeOnUpdate()->cascadeOnDelete(); */
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
        Schema::dropIfExists('atractivo_seccion');
    }
}

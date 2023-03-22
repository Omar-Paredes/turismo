<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHorasToEstacionalidadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('estacionalidads', function (Blueprint $table) {
            $table->time('hora_apertura')->default('00:00:00');
            $table->time('hora_cierre')->default('00:00:00');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('estacionalidads', function (Blueprint $table) {
            $table->dropColumn('hora_apertura');
            $table->dropColumn('hora_cierre');
        });
    }
}

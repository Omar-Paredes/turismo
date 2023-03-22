<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeHorariosToNullableEstacionalidadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('estacionalidads', function (Blueprint $table) {
           $table->date('horarios')->nullable()->change(); 
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteForeignAtractivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('atractivos', function (Blueprint $table) {
            $table->dropColumn(['tipo_atractivo_id', 'ubicacion_id', 'accesibilidad_id', 'estacionalidad_id']);
        });
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignAtractivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('atractivos', function (Blueprint $table) {
            $table->foreignId('tipo_atractivo_id')->nullable()->constrained('tipo_atractivos')->cascadeOnUpdate()->nullOnDelete();
            $table->foreignId('ubicacion_id')->nullable()->constrained('ubicacions')->cascadeOnUpdate()->nullOnDelete();
            $table->foreignId('accesibilidad_id')->nullable()->constrained('accesibilidads')->cascadeOnUpdate()->nullOnDelete();
            $table->foreignId('estacionalidad_id')->nullable()->constrained('estacionalidads')->cascadeOnUpdate()->nullOnDelete();
        });
    }
}

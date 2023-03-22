<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtractivoEmpresaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
/*     public function up()
    {
        Schema::create('atractivo_empresa', function (Blueprint $table) {
            $table->id();
            $table->foreignId('atractivo_id')->nullable()->constrained('atractivos')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('empresa_id')->nullable()->constrained('empresas')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }
 */
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('atractivo_empresa');
    }
}

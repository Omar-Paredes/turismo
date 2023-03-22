<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123456'),
            'estado' => true
        ]);

        DB::table('accesibilidads')->insert([
            'tipo_de_via' => 'Carretera',
            'estado_de_via' => 'buena'
        ]);


        DB::table('accesibilidads')->insert([
            'tipo_de_via' => 'Transporte fluvial',
            'estado_de_via' => 'buena'
        ]);

        DB::table('actividads')->insert([
            'nombre' => 'Observación de flora y fauna',
            'descripcion' => 'Observa las maravillas de la naturaleza'
        ]);

        DB::table('actividads')->insert([
            'nombre' => 'Bici montaña',
            'descripcion' => 'Recorre todo el monte junto a tu bici'
        ]);

        DB::table('actividads')->insert([
            'nombre' => 'Camping',
            'descripcion' => 'Acampa con tus compañeros y las estrellas'
        ]);


        DB::table('estacionalidads')->insert([
            'temporada' => 'Todo el año',
            'horarios' => '01/01/2023'
        ]);

        DB::table('ubicacions')->insert([
            'informacion' => 'Informacion del parque nacional tunari',
            'distrito' => 'distrito 10',
            'calles' => 'Av libertador, calle tarija',
            'altitud' => '-17.24762442326786, -66.33363278465504',
            'ubicacion_geografica' => 'A 10 kilometros de la ciudad de cochabamba',
        ]);

        DB::table('ubicacions')->insert([
            'informacion' => 'Informacion del valle perdido de san silvestre',
            'distrito' => 'distrito 15',
            'calles' => 'Av Melchor urquidi, calle buenos aires',
            'altitud' => '-17.4391226818661, -66.22802612414348',
            'ubicacion_geografica' => 'A 0.9 kilometros de la ciudad de cochabamba',
        ]);
    }
}

//-17.247542452176695, -66.33378298836112
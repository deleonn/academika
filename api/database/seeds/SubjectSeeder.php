<?php

use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('subjects')->insert([
        'id' => 1,
        'name' => 'POO'
      ]);

      DB::table('subjects')->insert([
        'id' => 2,
        'name' => 'Matemáticas'
      ]);

      DB::table('subjects')->insert([
        'id' => 3,
        'name' => 'CNC'
      ]);

      DB::table('subjects')->insert([
        'id' => 4,
        'name' => 'Cisco'
      ]);

      DB::table('subjects')->insert([
        'id' => 5,
        'name' => 'SQL'
      ]);
    }
}

<?php

use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('courses')->insert([
        'id' => 1,
        'subject_id' => 1,
        'name' => 'Introducción a la Programación',
        'tutor_id' => 5,
        'date' => date('Y-m-d'),
        'time' => date('h:i:s'),
        'likes' => 0,
      ]);
    }
}

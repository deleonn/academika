<?php

use Illuminate\Database\Seeder;

class UserCourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('user_courses')->insert([
        'user_id' => 1,
        'course_id' => 1,
      ]);
    }
}

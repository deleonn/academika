<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
          'name' => 'Joel de León',
          'username' => 'deleonn',
          'email' => 'joel.dl08@gmail.com',
          'password' => bcrypt('secret'),
          'photo' => 'img/users/user-icon.png',
          'role_id' => 1
        ]);

        $i = 0;

        for ($i=0; $i < 3; $i++) {
          DB::table('users')->insert([
            'name' => 'User_'.$i,
            'username' => 'user_'.$i,
            'email' => 'user_'.$i.'@example.com',
            'password' => bcrypt('secret'),
            'photo' => 'img/users/user-icon.png',
            'role_id' => 1
          ]);
        }

        for ($i=0; $i < 2; $i++) {
          DB::table('users')->insert([
            'name' => 'Tutor_'.$i,
            'username' => 'tutor_'.$i,
            'email' => 'tutor_'.$i.'@example.com',
            'password' => bcrypt('secret'),
            'photo' => 'img/users/user-icon.png',
            'role_id' => 2
          ]);
        }

        DB::table('users')->insert([
          'name' => 'Admin',
          'username' => '',
          'email' => 'admin@example.com',
          'password' => bcrypt('secret'),
          'photo' => 'img/users/user-icon.png',
          'role_id' => 3
        ]);
    }
}

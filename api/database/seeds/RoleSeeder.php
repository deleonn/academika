<?php

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('roles')->insert([
        'id' => 1,
        'name' => 'Student'
      ]);
      DB::table('roles')->insert([
        'id'=>2,
        'name' => 'Tutor',
      ]);
      DB::table('roles')->insert([
        'id'=>3,
        'name' => 'Admin',
      ]);
    }
}

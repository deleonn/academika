<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('courses', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('subject_id')->unsigned();
          $table->foreign('subject_id')->references('id')->on('subjects');
          $table->string('name');
          $table->integer('tutor_id')->unsigned();
          $table->foreign('tutor_id')->references('id')->on('users');
          $table->date('date');
          $table->time('time');
          $table->integer('likes');
          $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

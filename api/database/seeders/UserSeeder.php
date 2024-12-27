<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::create([
            'name' => 'Users1',
            'email' => 'Users1@gmail.com',
            'password' => bcrypt('data@1234'),
            'user_type' => 'user',
            'avatar' => 'user.png',
            'status' => 'active'
        ]);
        User::create([
            'name' => 'Users2',
            'email' => 'Users2@gmail.com',
            'password' => bcrypt('data@1234'),
            'user_type' => 'user',
            'avatar' => 'user.png',
            'status' => 'active'
        ]);
        User::create([
            'name' => 'Users3',
            'email' => 'Users3@gmail.com',
            'password' => bcrypt('data@1234'),
            'user_type' => 'user',
            'avatar' => 'user.png',
            'status' => 'active'
        ]);
        User::create([
            'name' => 'Users4',
            'email' => 'Users4@gmail.com',
            'password' => bcrypt('data@1234'),
            'user_type' => 'user',
            'avatar' => 'user.png',
            'status' => 'active'
        ]);
        User::create([
            'name' => 'Users5',
            'email' => 'Users5@gmail.com',
            'password' => bcrypt('data@1234'),
            'user_type' => 'user',
            'avatar' => 'user.png',
            'status' => 'active'
        ]);
    }
}

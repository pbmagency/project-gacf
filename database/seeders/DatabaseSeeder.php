<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'justin@gmail.com'],
            [
                'name'               => 'Admin PBM',
                'email'              => 'justin@gmail.com',
                'password'           => Hash::make('123justin'),
                'role'               => 'admin',
                'email_verified_at'  => now(),
            ]
        );
    }
}

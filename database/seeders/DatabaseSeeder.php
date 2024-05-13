<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\BooksTableSeeder;
use Database\Seeders\ExchangeRequestsTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(BooksTableSeeder::class);
        $this->call(ExchangeRequestsTableSeeder::class);

    }
}

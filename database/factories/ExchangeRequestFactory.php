<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ExchangeRequest>
 */
class ExchangeRequestFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sender_id' => \App\Models\User::factory()->create()->id,
            'receiver_id' => \App\Models\User::factory()->create()->id,
            'book_id' => \App\Models\Book::factory()->create()->id,
            'request_status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
            'delivery_method' => $this->faker->randomElement(['pickup', 'delivery']),
            'address' => $this->faker->address,
            'duration' => $this->faker->randomNumber(2),
        ];
    }
}

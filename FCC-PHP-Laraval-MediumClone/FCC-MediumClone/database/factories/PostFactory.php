<?php

// This line defines the namespace for the file. Laravel factories are typically located in the `Database\Factories` namespace.
namespace Database\Factories;

// This line imports the `Category` model, which is used to associate a post with an existing category.
use App\Models\Category;

// This line imports the base `Factory` class from Laravel's Eloquent. All factories must extend this class.
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * The `@extends` docblock is a PHPDoc annotation used by IDEs and static analysis tools.
 * It specifies that this `PostFactory` class is a factory for the `App\Models\Post` model,
 * providing code-completion and better type-hinting.
 */
class PostFactory extends Factory
{
    /**
     * The `definition()` method is the heart of the factory. It defines the default, fake data for a model.
     * When you call `Post::factory()->create()`, Laravel executes this method to get the attributes for the new `Post` record.
     *
     * @return array<string, mixed>
     * The return type specifies that this method returns an associative array where keys are strings (the column names)
     * and values are of a mixed type (strings, integers, etc.).
     */
    public function definition(): array
    {
        // `fake()` is a helper function that provides access to the Faker library, which generates realistic-looking fake data.
        // `fake()->sentence()` generates a random, fake sentence to be used as the post's title.
        $title = fake()->sentence();
        
        // This array defines the data that will be used to create a new post record in the database.
        return [
            // `'image' => fake()->imageUrl()`: Generates a random image URL using the Faker library. This is a common practice for dummy data.
            'image' => fake()->imageUrl(),
            
            // `'title' => $title`: Assigns the randomly generated sentence to the `title` column.
            'title' => $title,
            
            // `'slug' => \Illuminate\Support\Str::slug($title)`: Generates a URL-friendly slug from the post's title.
            // `\Illuminate\Support\Str` is a Laravel string helper class, and the `slug()` method converts a string into a clean, hyphenated format.
            'slug' => \Illuminate\Support\Str::slug($title),
            
            // `'content' => fake()->paragraphs(5)`: Generates an array of 5 fake paragraphs to serve as the post's content.
            'content' => fake()->paragraphs(5),
            
            // `'category_id' => Category::inRandomOrder()->first()->id`: This line handles the foreign key relationship.
            // `Category::inRandomOrder()`: Retrieves all categories from the database in a random order.
            // `->first()`: Selects the first category from the randomized results.
            // `->id`: Gets the `id` of that random category. This ensures that each post is assigned to a real, existing category.
            'category_id' => Category::inRandomOrder()->first()->id,
            
            // `'user_id' => 1`: Assigns the post to a specific user with an ID of 1.
            // This is a simplified approach, often used when you have a known, static user for testing purposes.
            'user_id' => 1,
            
            // `'published_at' => fake()->optional()->dateTime()`: Generates a random `published_at` timestamp, but makes it optional.
            // `fake()->optional()`: Makes the next method call optional, meaning there's a chance it will return `NULL`. This is useful for simulating posts that are not yet published.
            // `->dateTime()`: Generates a random date and time.
            'published_at' => fake()->optional()->dateTime(),
        ];
    }
}

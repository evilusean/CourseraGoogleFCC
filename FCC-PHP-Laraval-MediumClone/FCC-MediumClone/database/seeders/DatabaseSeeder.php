<?php

// This line defines the namespace for the seeder class. Laravel seeders are
// typically located in the `Database\Seeders` namespace.
namespace Database\Seeders;

// These lines import the `Category` and `Post` models, which are the Eloquent models
// we will be creating data for.
use App\Models\Category;
use App\Models\Post;
use App\Models\User;

// This line imports the base `Seeder` class from Laravel's framework.
// All custom seeder classes must extend this class.
use Illuminate\Database\Seeder;

// This is the `DatabaseSeeder` class. It's the main seeder that is
// executed when you run `php artisan db:seed`.
class DatabaseSeeder extends Seeder
{
    /**
     * The `run()` method is the main entry point for the seeder.
     * All the seeding logic should be placed within this method.
     *
     * @return void
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'John Doe',
            'email' => 'test@email.com' ]);
        // This array contains a list of predefined category names.
        $categories = ['Technology', 'Health', 'Travel', 'Food', 'Politics'];
        
        // This `foreach` loop iterates through the `$categories` array.
        foreach ($categories as $category) {
            // For each category name in the array, a new `Category` record is created
            // in the database. The `create()` method fills the `name` column with
            // the current category name from the loop.
            Category::create(['name' => $category]);
        }

        // This line creates 100 new `Post` records using the `PostFactory`.
        // `Post::factory(100)`: This command tells Laravel to prepare 100 instances of the `Post` model.
        // `->create()`: This executes the factory, saving all 100 records to the database.
        // It's important that this line comes after the categories have been created,
        // because the `PostFactory` relies on existing categories to assign a `category_id` to each post.
        Post::factory(100)->create();

    }
}
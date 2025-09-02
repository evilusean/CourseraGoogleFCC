PHP

<?php

// This line imports the base Migration class from Laravel, which your migration will extend.
use Illuminate\Database\Migrations\Migration;

// This line imports the Blueprint class, used to define the table's structure.
// It provides methods for adding columns, setting their data types, and defining constraints.
use Illuminate\Database\Schema\Blueprint;

// This line imports the Schema facade, a powerful tool for building and modifying database tables.
// It provides methods like `create`, `table`, `drop`, etc. for manipulating the database schema.
use Illuminate\Support\Facades\Schema;

// This is the migration class definition. It's an anonymous class that extends Laravel's `Migration` base class.
// This structure is standard for Laravel migration files.
return new class extends Migration
{
    /**
     * The `up()` method is the core of the migration. It defines the database changes you want to apply.
     * When you run `php artisan migrate`, Laravel executes the `up()` method of all new migrations.
     * In this case, the `up()` method is creating a new table called `posts`.
     */
    public function up(): void
    {
        // `Schema::create()` is a static method that creates a new table in the database.
        // The first argument is the name of the table (`posts`).
        // The second argument is a closure (an anonymous function) that receives a `Blueprint` object.
        // This closure is where you define the columns for the `posts` table.
        Schema::create('posts', function (Blueprint $table) {
            // `$table->id()`: A shortcut method that adds an auto-incrementing `id` column of type UNSIGNED BIGINT.
            // It automatically sets this column as the primary key for the table.
            $table->id();

            // `$table->string('images')->nullable()`: Creates a `string` column named `images`.
            // The `nullable()` method makes this column optional, allowing it to have a `NULL` value.
            $table->string('image')->nullable();

            // `$table->string('title')`: Creates a `string` column named `title`. This column is required by default.
            $table->string('title');

            // `$table->string('slug')->unique()`: Creates a `string` column named `slug`.
            // The `unique()` method adds a unique index, ensuring that no two posts can have the same slug.
            // A slug is a URL-friendly string, often derived from the title.
            $table->string('slug')->unique();

            // `$table->longText('content')`: Creates a `longText` column named `content`.
            // This data type is suitable for storing a large amount of text, like the full content of a blog post.
            $table->longText('content');

            // `$table->foreignId('category_id')->constrained()->onDelete('cascade')`: This is a foreign key constraint.
            // - `foreignId('category_id')`: Creates an UNSIGNED BIGINT column named `category_id`. This is the standard Laravel convention for foreign keys.
            // - `constrained()`: Tells Laravel to create a foreign key constraint. By default, it will look for a table named `categories` and a column named `id`.
            // - `onDelete('cascade')`: Specifies a `CASCADE` action for deletes. This means if a category is deleted, all posts belonging to that category will also be automatically deleted.
            $table->foreignId('category_id')->constrained()->onDelete('cascade');

            // `$table->foreignId('user_id')->constrained()->onDelete('cascade')`: Similar to the category foreign key, this creates a foreign key to the `users` table.
            // The `onDelete('cascade')` action ensures that if a user is deleted, all posts they authored will also be deleted.
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            // `$table->timestamp('published_at')->nullable()`: Creates a `timestamp` column named `published_at`.
            // The `nullable()` method makes this column optional, allowing a post to be saved as a draft without a publication date.
            $table->timestamp('published_at')->nullable();

            // `$table->timestamps()`: This is a shortcut method that adds two columns to the table: `created_at` and `updated_at`.
            // Laravel automatically manages the values for these columns, setting them to the current timestamp when a record is created or updated.
            $table->timestamps();
        });
    }

    /**
     * The `down()` method defines the "rollback" or "reverse" of the `up()` method.
     * When you run `php artisan migrate:rollback`, Laravel executes the `down()` method to undo the last batch of migrations.
     * This ensures that you can safely revert database changes if something goes wrong.
     * In this case, the `down()` method's purpose is to drop the `posts` table.
     */
    public function down(): void
    {
        // `Schema::dropIfExists()` is a method that safely drops the specified table if it exists.
        // Using `dropIfExists` prevents an error from being thrown if the table doesn't exist, which is a good practice.
        // The argument `'posts'` specifies the table to be dropped.
        Schema::dropIfExists('posts');
    }
};
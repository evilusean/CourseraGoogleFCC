<?php

// This line imports the base Migration class from Laravel, which your migration will extend.
use Illuminate\Database\Migrations\Migration;

// This line imports the Blueprint class, which is used to define the table structure.
// It provides methods for adding columns, setting their data types, and defining constraints.
use Illuminate\Database\Schema\Blueprint;

// This line imports the Schema facade, a powerful tool for building and modifying database tables.
// It provides methods like `create`, `table`, `drop`, etc., for manipulating the database schema.
use Illuminate\Support\Facades\Schema;

// This is the migration class definition. It's an anonymous class that extends Laravel's `Migration` base class.
// This structure is a standard for Laravel migration files.
return new class extends Migration
{
    /**
     * The `up()` method is the most important part of the migration. It defines the database changes you want to apply.
     * When you run `php artisan migrate`, Laravel executes the `up()` method of all new migrations.
     * In this case, the `up()` method is creating a new table called `categories`.
     */
    public function up(): void
    {
        // `Schema::create()` is a static method that creates a new table in the database.
        // The first argument is the name of the table (`categories`).
        // The second argument is a closure (an anonymous function) that receives a `Blueprint` object.
        // This closure is where you define the columns for the `categories` table.
        Schema::create('categories', function (Blueprint $table) {
            // `$table->id()`: This is a shortcut method that adds an auto-incrementing `id` column of type UNSIGNED BIGINT.
            // It automatically sets this column as the primary key for the table.
            $table->id();

            // `$table->timestamps()`: This is another shortcut method. It adds two columns to the table:
            // `created_at` and `updated_at`.
            // Laravel automatically manages the values for these columns, setting them to the current timestamp
            // when a record is created or updated, respectively. This is very useful for tracking when a record was last modified.
            $table->timestamps();
        });
    }

    /**
     * The `down()` method defines the "rollback" or "reverse" of the `up()` method.
     * When you run `php artisan migrate:rollback`, Laravel executes the `down()` method to undo the last batch of migrations.
     * This ensures that you can safely revert database changes if something goes wrong.
     * In this case, the `down()` method's purpose is to drop the `categories` table.
     */
    public function down(): void
    {
        // `Schema::dropIfExists()` is a method that safely drops the specified table if it exists.
        // Using `dropIfExists` prevents an error from being thrown if the table doesn't exist, which is a good practice.
        // The argument `'categories'` specifies the table to be dropped.
        Schema::dropIfExists('categories');
    }
};
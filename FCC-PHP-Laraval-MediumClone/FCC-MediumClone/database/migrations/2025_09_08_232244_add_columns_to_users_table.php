<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    // The `up()` method is the main method of a migration. It defines the changes that will be applied to the database.
// When you run the `php artisan migrate` command, Laravel executes this method to update the schema.
    public function up(): void
    {
        // `Schema::table()`: This is a static call to the `Schema` facade.
        // The `table()` method is used to modify an existing table in the database.
        // - The first argument, 'users', is the name of the table we want to modify.
        // - The second argument is a closure (an anonymous function) that receives a `Blueprint` object.
        Schema::table('users', function (Blueprint $table) {

            // `->string('username')`: This method adds a new column named `username` with a `string` data type (which maps to VARCHAR in most databases).
            // `->unique()`: This chained method adds a unique index to the `username` column, ensuring that no two users can have the same username.
            // `->after('id')`: This chained method specifies that the new `username` column should be placed immediately after the `id` column in the table.
            $table->string('username')->unique()->after('id');

            // `->string('image')`: Adds a new `string` column named `image`.
            // `->nullable()`: This chained method allows the `image` column to store `NULL` values. This is useful because not every user might have a profile image.
            // `->after('email_verified_at')`: Specifies that the `image` column should be placed after the `email_verified_at` column.
            $table->string('image')->nullable()->after('email_verified_at');

            // `->text('bio')`: Adds a new `text` column named `bio`. The `text` type is suitable for longer strings like a user's biography.
            // `->nullable()`: Allows the `bio` column to be `NULL`.
            // `->after('image')`: Specifies that the `bio` column should be placed after the `image` column.
            $table->text('bio')->nullable()->after('image');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};

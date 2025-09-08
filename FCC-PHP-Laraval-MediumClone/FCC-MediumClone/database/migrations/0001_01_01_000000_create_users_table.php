<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            // `->string('username')`: This method adds a new column named `username` with a `string` data type (which maps to VARCHAR in most databases).
            // `->unique()`: This chained method adds a unique index to the `username` column, ensuring that no two users can have the same username.
            // `->after('id')`: This chained method specifies that the new `username` column should be placed immediately after the `id` column in the table.
            $table->string('username')->unique()->after('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            // `->string('image')`: Adds a new `string` column named `image`.
            // `->nullable()`: This chained method allows the `image` column to store `NULL` values. This is useful because not every user might have a profile image.
            // `->after('email_verified_at')`: Specifies that the `image` column should be placed after the `email_verified_at` column.
            $table->string('image')->nullable()->after('email_verified_at');
            // `->text('bio')`: Adds a new `text` column named `bio`. The `text` type is suitable for longer strings like a user's biography.
            // `->nullable()`: Allows the `bio` column to be `NULL`.
            // `->after('image')`: Specifies that the `bio` column should be placed after the `image` column.
            $table->text('bio')->nullable()->after('image');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};

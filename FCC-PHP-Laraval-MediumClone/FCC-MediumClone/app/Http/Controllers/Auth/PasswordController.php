<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that this `PasswordController` class lives in the
// `App\Http\Controllers\Auth` directory.
namespace App\Http\Controllers\Auth;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Controllers\Controller; // This is the base Controller class from which our class inherits.
use Illuminate\Http\RedirectResponse; // This indicates that a function will redirect the user to a new URL.
use Illuminate\Http\Request; // This is the core class for handling incoming HTTP requests.
use Illuminate\Support\Facades\Hash; // The `Hash` facade is used to securely hash passwords.
use Illuminate\Validation\Rules\Password; // We import the class that provides built-in validation rules for passwords.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, giving it access to useful built-in features.
class PasswordController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to handle the update of the user's password.
     */
    // The `update` method handles a PUT request to change the user's password.
    // It takes a `Request` object and is type-hinted to return a `RedirectResponse`.
    public function update(Request $request): RedirectResponse
    {
        // This line is a key security step. It validates the user's input before any action is taken.
        // `validateWithBag()` is used when a single page might have multiple forms with their own validation.
        // 'updatePassword' is the name of the validation bag, which helps to keep errors separate from other forms.
        $validated = $request->validateWithBag('updatePassword', [
            // This rule array validates the 'current_password' field.
            'current_password' => ['required', 'current_password'],
            // 'required' ensures the field is not empty.
            // 'current_password' is a special Laravel validation rule that securely
            // checks if the value provided matches the logged-in user's current password.
            'password' => ['required', Password::defaults(), 'confirmed'],
            // 'required' ensures the new password field is not empty.
            // 'Password::defaults()' is a powerful rule that applies a set of default
            // security requirements (e.g., minimum length, mix of characters).
            // 'confirmed' ensures the 'password' field matches the 'password_confirmation' field.
        ]);

        // This line updates the user's password in the database.
        // `$request->user()` is a convenient way to get the currently authenticated user's model.
        // `->update()` is an Eloquent method that updates the database record.
        $request->user()->update([
            // This is where the password is changed. It's critical to use `Hash::make()`
            // to encrypt the new password before it's saved. This is a one-way process,
            // so the password cannot be converted back to plain text, which is a security best practice.
            'password' => Hash::make($validated['password']),
        ]);

        // This line redirects the user back to the page they were on.
        // We chain the `with()` method to add a session flash message.
        // This message, with the key 'status' and value 'password-updated',
        // can be used in the view to show a success notification to the user.
        return back()->with('status', 'password-updated');
    }
}

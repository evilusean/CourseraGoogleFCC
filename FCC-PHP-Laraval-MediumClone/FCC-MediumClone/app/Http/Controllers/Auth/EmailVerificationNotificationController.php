<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that this `EmailVerificationNotificationController` class lives in the
// `App\Http\Controllers\Auth` directory.
namespace App\Http\Controllers\Auth;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Controllers\Controller; // We are importing the base Controller class from which our class will inherit.
use Illuminate\Http\RedirectResponse; // This indicates that a function will redirect the user to a new URL.
use Illuminate\Http\Request; // This is the core class for handling incoming HTTP requests.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, giving it access to useful built-in features.
class EmailVerificationNotificationController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to send a new email verification notification to the user.
     */
    // The `store` method handles the POST request to resend the verification link.
    // It takes a `Request` object and is type-hinted to return a `RedirectResponse`.
    public function store(Request $request): RedirectResponse
    {
        // This is a security check. We first check if the user has already verified their email
        // using the `hasVerifiedEmail()` method on the user model.
        if ($request->user()->hasVerifiedEmail()) {
            // If the user's email is already verified, we don't need to do anything.
            // We just redirect them to the dashboard. The `intended()` method sends them
            // to the page they were trying to access, or to the dashboard as a fallback.
            return redirect()->intended(route('dashboard', absolute: false));
        }

        // If the email is not verified, this line triggers the core functionality.
        // It calls the `sendEmailVerificationNotification()` method on the user model.
        // This is a built-in Laravel feature that automatically generates a signed URL
        // and sends an email to the user with that verification link.
        $request->user()->sendEmailVerificationNotification();

        // This returns a "back" redirect response. The `back()` helper function
        // redirects the user to the page they were on before the request was made.
        // We also chain the `with()` method to add a session flash message.
        // This message, with the key 'status' and value 'verification-link-sent',
        // can be used in the view to show a success notification to the user.
        return back()->with('status', 'verification-link-sent');
    }
}
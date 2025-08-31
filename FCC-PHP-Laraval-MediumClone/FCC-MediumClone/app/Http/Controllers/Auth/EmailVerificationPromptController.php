<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that this `EmailVerificationPromptController` class lives in the
// `App\Http\Controllers\Auth` directory.
namespace App\Http\Controllers\Auth;

// The `use` statements are like import statements, bringing other classes into this file.
use App\Http\Controllers\Controller; // We are importing the base Controller class from which our class will inherit.
use Illuminate\Http\RedirectResponse; // This indicates that a function will redirect the user to a new URL.
use Illuminate\Http\Request; // This is the core class for handling incoming HTTP requests.
use Illuminate\View\View; // This indicates that a function will return a server-rendered view.

// This line declares the class. `extends Controller` means it inherits functionality
// from Laravel's base `Controller`, giving it access to useful built-in features.
class EmailVerificationPromptController extends Controller
{
    /**
     * This is a "docblock" comment. It's a standard practice to document what a method does.
     * This method's purpose is to display the email verification prompt.
     */
    // The `__invoke` method is a special "magic" method. A class with only this method
    // is called an "invokable" controller. This makes your route file cleaner, as you
    // can point the route directly to the class name instead of a specific method.
    //
    // The return type hint `RedirectResponse|View` is a "union type". It tells PHP that
    // this function can return an object of type `RedirectResponse` OR `View`. This is a
    // modern PHP feature that makes code more expressive and easier to understand.
    public function __invoke(Request $request): RedirectResponse|View
    {
        // This single line of code uses a "ternary operator" to perform a conditional check.
        // It's a shorthand way of writing a simple `if...else` statement.
        // The format is: (condition) ? (value if true) : (value if false)
        return $request->user()->hasVerifiedEmail()
                    // The 'condition' checks if the currently logged-in user's email has
                    // been verified. The `hasVerifiedEmail()` method is provided by a
                    // trait on the `User` model.
                    ? redirect()->intended(route('dashboard', absolute: false))
                    // If the condition is true (the user's email IS verified), we
                    // redirect them to the dashboard. The `intended()` method is a smart
                    // way to send them to the page they were originally trying to visit.
                    : view('auth.verify-email');
                    // If the condition is false (the user's email is NOT verified),
                    // we return the `auth.verify-email` view, which is the page
                    // that tells them to check their inbox for a verification link.
    }
}
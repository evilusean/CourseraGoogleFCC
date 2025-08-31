<?php

// The 'namespace' keyword organizes our classes and prevents naming conflicts.
// This tells PHP that the 'VerifyEmailController' class lives in this specific "folder."
namespace App\Http\Controllers\Auth;

// The 'use' statements import other classes that this file needs to use.
// We are importing Laravel's base Controller, the 'Verified' event, a special
// type of request for email verification, and the RedirectResponse class.
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;

// This line declares the class. 'extends Controller' means it inherits
// functionality from Laravel's base Controller class.
class VerifyEmailController extends Controller
{
    /**
     * This is a "docblock" comment. It explains the purpose of the method.
     * It's called when the user clicks the verification link in their email.
     */
    // The `__invoke()` is a special "magic method" in PHP. It means that you can
    // call this class like a function directly from a route. This is why you don't
    // see a method name like 'handle' or 'verify' in the route definition.
    // The ': RedirectResponse' is a type hint, indicating this method will redirect
    // the user to a new URL.
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        // The `$request->user()` method retrieves the authenticated user from the request.
        // We call `hasVerifiedEmail()` on the user object to check if their email has already been verified.
        // This is a quick check to prevent unnecessary actions.
        if ($request->user()->hasVerifiedEmail()) {
            // If the email is already verified, we immediately redirect the user to
            // the dashboard. The `intended()` method is very smart—it will redirect the
            // user to the page they were originally trying to access before being
            // intercepted by the email verification step. The `?verified=1` is a query
            // parameter that can be used on the front-end to display a success message.
            return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
        }

        // This is the core action. The `markEmailAsVerified()` method is a built-in
        // Laravel method that updates the `email_verified_at` column in the database
        // with the current timestamp. It returns `true` if the verification was successful.
        if ($request->user()->markEmailAsVerified()) {
            // If the email was successfully marked as verified, we fire a `Verified` event.
            // This allows other parts of the application (like an event listener) to run
            // code in response to this successful verification (e.g., sending a welcome email).
            event(new Verified($request->user()));
        }

        // This is the final redirect, used for both the initial verification and if the
        // email was already verified. It takes the user to the dashboard with the
        // success message flag.
        return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
    }
}
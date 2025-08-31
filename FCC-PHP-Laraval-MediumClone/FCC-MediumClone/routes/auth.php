<?php

// The 'use' statements at the top of the file are like import statements in other languages.
// They tell the program that we want to use specific classes from other files.
// In this case, we are importing all the controller classes needed for authentication
// so we don't have to write their full file path every time we use them.
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;

// The 'Route' facade is used here to register all the routes.
// 'Illuminate\Support\Facades\Route' is the official namespace for the Route facade.
use Illuminate\Support\Facades\Route;

// This is the first main section of the file. It's a route group.
// A route group allows you to apply a common setting to a set of routes.
// The 'middleware('guest')' part is crucial. Middleware is code that runs before
// the route's main logic. The 'guest' middleware checks if the user is NOT logged in.
// If a logged-in user tries to visit any of the routes inside this group,
// they will be redirected away (usually to the dashboard).
Route::middleware('guest')->group(function () {

    // This route handles displaying the registration form.
    // 'get' means it responds to a browser navigating to '/register'.
    // '[RegisteredUserController::class, 'create']' specifies that the 'create' method
    // on the 'RegisteredUserController' class will handle this request.
    // '->name('register')' gives this route a unique, human-readable name. This is very
    // useful for generating URLs in your code (e.g., redirecting to 'register').
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    // This route handles the form submission when a user clicks the 'Register' button.
    // 'post' means it responds to an HTTP POST request, which is what forms send.
    // '[RegisteredUserController::class, 'store']' means the 'store' method on the
    // controller will process the user's registration data.
    Route::post('register', [RegisteredUserController::class, 'store']);

    // This is the GET route for displaying the login form.
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    // This is the POST route for processing the login form submission.
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    // This GET route displays the "Forgot Password?" page where a user can enter their email.
    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    // This POST route processes the "Forgot Password" form and sends the email
    // with a password reset link.
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    // This GET route displays the password reset form. The '{token}' part is a URL
    // parameter that holds a unique token to verify the user's request.
    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    // This POST route processes the password reset form and updates the user's password.
    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

// This is the second main section of the file, another route group.
// The 'middleware('auth')' is the opposite of 'guest'. It ensures that the user
// is logged in before they can access any of these routes. If they aren't,
// they will be redirected to the login page.
Route::middleware('auth')->group(function () {

    // This route displays a prompt asking the user to verify their email address.
    // This is a "single-action controller" so you can just use the class name directly.
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    // This route handles the actual email verification.
    // It has a '{id}' and '{hash}' to verify the user and link.
    // 'signed' middleware verifies the URL signature to prevent tampering.
    // 'throttle:6,1' limits requests to 6 attempts per minute to prevent abuse.
    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    // This route sends a new verification email to the user.
    // 'throttle:6,1' is used here to prevent spamming the user with emails.
    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    // This route displays the password confirmation page, often used before
    // sensitive actions like changing your password or email.
    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    // This route processes the password confirmation form submission.
    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    // This route handles updating the user's password.
    // It uses a 'put' request, which is a common RESTful practice for updates.
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    // This route logs the user out of the application.
    // It uses a 'post' request to prevent accidental logouts via a simple link click.
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});

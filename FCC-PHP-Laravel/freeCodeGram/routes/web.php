<?php

use Illuminate\Support\Facades\Route;
use app\Http\Controllers\ProfilesController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::GET('/', function () {
    return view('welcome');
});

Auth::routes(); 

/*Route::GET('/profile/{user}', 'ProfilesController@index')->name('profile.show'); */
Route::get('/profile/{user}', [App\Http\Controllers\ProfilesController::class, 'index'])->name('profile.show'); 
/*Route::get('/profile/{user}', 'ProfilesController@index')->name('profile.show'); */
/* above code what tutorial says */

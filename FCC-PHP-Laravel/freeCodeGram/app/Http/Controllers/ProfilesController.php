<?php

namespace App\Http\Controllers;

use \App\Models\User;
use Illuminate\Http\Request;

class ProfilesController extends Controller
{
    public function index($user)
    {
        $user = User::findOrFail($user);
        //dd(User::find($user));
        return view('profiles.index',
            [
                'user' => $user,
            ]
        );
    }
}

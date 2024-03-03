<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function create()
    {
        return view('posts.create');
    }
    public function store()
    {
        // Create a new post using the request data die and dump debugging
        //dd(request()->all());
        // Validate the data
        $data = request()->validate([
            'title' => 'required',
            'image' => ['required', 'image'],
        ]);

    }
}

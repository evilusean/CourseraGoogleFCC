<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class ClapController extends Controller
{
    public function clap(Post $post) 
    {
        $post->claps()->create([
            'user_id' => auth()->id(),
        ]);
        return response()->json([
            'clapsCount' => $post->claps()->count(),
        ]);
    }
}

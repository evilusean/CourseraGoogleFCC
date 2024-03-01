@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-3 p-5">
            <img src="https://github.com/evilusean/DaGram-InstagramClone/blob/main/Images/NP%20Seans/ChadEngage.jpg?raw=true" class="rounded-circle" style="width: 150px; height: 150px";></img>
        </div>
        <div class="col-9 pt-5">
            <div>
                <h1>{{ $user->username }}</h1>
            </div>
            <div class="d-flex">
                <div class="pe-5">
                    <strong>153</strong> posts
                </div>
                <div class="pe-5">
                    <strong>23k</strong> followers
                </div>
                <div class="pe-5">
                    <strong>212</strong> following
                </div>
                </div>
                <div class="pt-4 font-weight-bold">
                    <strong>freeCodeCamp.org</strong> <!-- {{ $user->profile->title}} -->
                </div>
                <div>
                    We're a global community of millions of people learning to code together. We're an open source, donor-supported, 501(c)(3) nonprofit.
                </div> <!--{{ $user->profile->description }} -->
                <div>
                    <a href="#">freeCodeCamp.org</a> <!--{{ $user->profile->url }} -->
                </div>
            </div>
        </div>
    </div>

    <div class="row p-5 d-flex justify-content-center">
        <div class="col-4 ps-5">
            <img src="https://github.com/evilusean/DaGram-InstagramClone/blob/main/Images/NP%20Seans/BuffPC.png?raw=true" class="w-100" style="max-height: 450px; max-width: 450px;"></img>
        </div>
        <div class="col-4">
            <img src="https://github.com/evilusean/DaGram-InstagramClone/blob/main/Images/NP%20Seans/ChadNpc.png?raw=true" class="w-100" style="max-height: 450px; max-width: 450px;"></img>
        </div>
        <div class="col-4 pe-5">
            <img src="https://github.com/evilusean/DaGram-InstagramClone/blob/main/Images/NP%20Seans/ChadCEONNEET.jpg?raw=true" class="w-100" style="max-height: 450px; max-width: 450px;"></img>
        </div>
    </div>
</div>
@endsection
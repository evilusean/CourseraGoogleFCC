@extends('layouts.app')

@section('content')
<div class="container">
    <form action="/p" enctype="multipart/form-data" method="post">
        @csrf
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="row mb-3">
                    <label for="caption" class="col-md-4 col-form-label">Post Caption</label>

                    
                        <input id="caption" 
                            type="text" 
                            class="form-control @error('caption') is-invalid @enderror" 
                            caption="caption" value="{{ old('caption') }}" required 
                            autocomplete="caption" autofocus>

                        @error('caption')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                    @enderror
                </div>
            </div>
        </div>
    </form>
</div>
@endsection
@props(['user', 'size' => 'w-12 h-12'])

@if ($user->image)
    <img class="{{ $size }} rounded-full" src="{{ $user->imageUrl() }}" alt="{{ $user->name }}">
@else
    <img class="{{ $size }} rounded-full"
        src="https://raw.githubusercontent.com/evilusean/DaGram-InstagramClone/refs/heads/main/Images/NP%20Seans/NPC%20SoiFace.png"
        alt="NPC">
@endif
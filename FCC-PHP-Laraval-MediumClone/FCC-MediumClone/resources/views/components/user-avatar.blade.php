@props(['user'])

@if ($user->image)
    <img class="h-12 w-12 rounded-full" src="{{ $user->imageUrl() }}" alt="{{ $user->name }}">
@else
    <img class="h-12 w-12 rounded-full"
        src="https://raw.githubusercontent.com/evilusean/DaGram-InstagramClone/refs/heads/main/Images/NP%20Seans/NPC%20SoiFace.png"
        alt="NPC">
@endif
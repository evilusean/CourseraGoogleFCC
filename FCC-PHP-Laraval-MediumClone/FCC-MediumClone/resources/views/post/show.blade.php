<x-app-layout>
    <div class="py-4">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <h1 class="text-2xl mb-4">{{ $post->title }}</h1>
                <div class="flex gap-4">
                    @if ($post->user->image)
                        <img class="h-12 w-12 rounded-full" src="{{ $post->user->imageUrl() }}" alt={{ $post->user->name }}>
                    @else
                        <img class="h-12 w-12 rounded-full"
                            src="https://raw.githubusercontent.com/evilusean/DaGram-InstagramClone/refs/heads/main/Images/NP%20Seans/NPC%20SoiFace.png"
                            alt="NPC">
                    @endif
                    <!-- User Avatar -->
                    <div>
                        <div class="flex gap-2">
                            <h3>{{ $post->user->name }}</h3>
                            &middot;
                            <a href="#" class="text-emerald-600">Follow</a>
                        </div>
                        <div class="flex gap-2 text-gray-500 text-sm">
                            {{ $post->readTime() }} min read
                            &middot;
                            {{ $post->created_at->format('M d, Y') }}
                        </div>
                    </div>
                    <!-- Clap Section -->
                    <div>
                        <img src="{{ $post->imageUrl() }}" alt="{{ $post->title }}" class="w-full">
                    </div>
                    <div>
                        {{ $post->content }}
                    </div>
                    <!-- Clap Section -->

                </div>
            </div>

        </div>
</x-app-layout>
<x-app-layout>
    <div class="py-4">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <h1 class="text-2xl mb-4">{{ $post->title }}</h1>
                <!-- User Avatar -->
                <div>
                    <div class="flex gap-4">
                        @if ($post->user->image)
                            <img class="h-12 w-12 rounded-full" src="{{ $post->user->imageUrl() }}"
                                alt="{{ $post->user->name }}">
                        @else
                            <img class="h-12 w-12 rounded-full"
                                src="https://raw.githubusercontent.com/evilusean/DaGram-InstagramClone/refs/heads/main/Images/NP%20Seans/NPC%20SoiFace.png"
                                alt="NPC">
                        @endif

                        <div>
                            <div class="flex gap-2 items-center">
                                <h3>{{ $post->user->name }}</h3>
                                &middot;
                                <a href="#" class="text-emerald-600">Follow</a>
                            </div>
                            <div class="flex gap-2 text-gray-500 text-sm mt-1">
                                {{ $post->readTime() }} min read
                                &middot;
                                {{ $post->created_at->format('M d, Y') }}
                            </div>
                        </div>
                    </div>
                    <!-- Clap Section -->
                    <div class="mt-8 border-t border-b">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>

                        </button>
                    </div>
                    <!-- Clap Section -->
                    <div class="mt-4">
                        <img src="{{ $post->imageUrl() }}" alt="{{ $post->title }}" class="w-full">
                    </div>
                    <!-- Content Section -->
                    <div>
                        {{ $post->content }}
                    </div>
                    <!-- Clap Section -->
                </div>
            </div>
        </div>
</x-app-layout>
<x-app-layout>
    <div class="py-4">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8">
                <h1 class="text-2xl mb-4">{{ $post->title }}</h1>
                <!-- User Avatar -->
                <div>
                    <div class="flex gap-4">
                        <x-user-avatar :user="$post->user" />

                        <div>
                            <x-follow-ctr :user="$post->user" class="flex gap-2">
                                <a href="{{ route('profile.show', $post->user) }}" class="hover:underline">
                                    {{ $post->user->name }}
                                </a>

                                @auth
                                    &middot;
                                    <button x-text="following ? 'Unfollow' : 'Follow'"
                                        :class="following ? 'text-red-600' : 'text-emerald-600'" @click="follow()">
                                    </button>
                                @endauth
                            </x-follow-ctr>
                            <div class="flex gap-2 text-gray-500 text-sm mt-1">
                                {{ $post->readTime() }} min read
                                &middot;
                                {{ $post->created_at->format('M d, Y') }}
                            </div>
                        </div>
                    </div>
                    <!-- Clap Section -->
                    <x-clap-button :post="$post" />
                    <!-- Image -->
                    <div class="mt-4">
                        <img src="{{ $post->imageUrl() }}" alt="{{ $post->title }}" class="w-full">
                    </div>
                    <!-- Content Section -->
                    <div>
                        {{ $post->content }}
                    </div>
                    <div class="mt-8 text">
                        <span class="px-4 py-2 bg-gray-200 rounded-xl">
                            {{ $post->category->name }}
                        </span>
                    </div>
                    <!-- Clap Section -->
                    <x-clap-button :post="$post" />
                </div>
            </div>
        </div>
</x-app-layout>
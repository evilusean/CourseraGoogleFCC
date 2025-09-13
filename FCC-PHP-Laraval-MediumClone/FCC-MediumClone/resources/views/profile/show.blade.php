<x-app-layout>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div class="flex">
                    <div class="flex-1">
                        <h1 class="text-5xl">{{ $user->name }}</h1>
                        <div class="mt-8 pr-8">
                            @forelse ($posts as $post)
                                <x-post-item :post="$post" />
                            @empty
                                <p class="text-center">No posts found.</p>
                            @endforelse
                        </div>
                    </div>
                    <div x-data="{
                        following: {{ $user->isFollowedBy(auth()->user()) ? 'true' : 'false' }},
                        follow() {
                            this.following = !this.following
                            axios.post().then(res => {
                                console.log(res)
                            )}
                                .catch(err => {
                                    console.log(err)
                                });
                        }
                    }" class="w-[320px] border-l px-8">
                        <x-user-avatar :user="$user" size="w-24 h-24" />
                        <h3>{{ $user->name }}</h3>
                        <p class="text-gray-500">
                            {{ $user->followers()->count() }} followers
                        </p>
                        <p>
                            {{ $user->bio }}
                        </p>
                        @if (auth()->user() && auth()->user()->id !== $user->id)
                            <div class="mt-4">
                                <button @click="follow()" class="rounded-full px-4 py-2 text-white"
                                x-text="following ? 'Unfollow' : 'Follow'" :class="following ? 'bg-red-600' : 'bg-emerald-600'"
                                >
                                    
                                </button>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
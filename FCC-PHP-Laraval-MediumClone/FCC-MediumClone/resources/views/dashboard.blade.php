<x-app-layout>


    <div class="py-4">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-4 text-gray-900">
                    <x-category-tabs />

                </div>
            </div>
            <div class="mt-8 text-gray-900">
                @forelse ($posts as $post)
                    <x-post-item :post="$post" />
                    @empty
                        <p class="text-center">No posts found.</p>
                @endforelse {{-- For else @directive will display no posts found if there are none, and will run a loop for each posts if there are--}}
            </div>
            {{ $posts->onEachSide(2)->links() }} {{-- pagination links --}}
        </div>
    </div>
</x-app-layout>
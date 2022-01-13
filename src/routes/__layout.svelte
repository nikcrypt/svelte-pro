<script lang="ts">
	import '../style.css';
</script>

<nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6 m-2 rounded-lg ">
	<div class="w-fit block flex-grow lg:flex lg:items-center lg:w-auto">
		<div class="text-lg  lg:flex-grow">
			<a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>Home</a
			>
			<a href="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>Blog</a
			>
			<a href="/news" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>News</a
			>
			<a
				href="/images"
				class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Images</a
			>
			<a
				href="/settings"
				class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Settings</a
			>
		</div>
	</div>
</nav>

<slot />

<script>
	import Websocket from './websocket.svelte';

	import Nested from '$lib/Nested.svelte';

	let current = 'profile';
	let active = 'tab';
	function handleClick() {
		current = 'about';
		console.log(current);
	}
</script>

<svelte:head>
	<title>Settings</title>
</svelte:head>
<div class="m-4">
	<ul class="flex">
		<li class="mr-3">
			<a
				class:tab-active={current === 'profile'}
				on:click={() => (current = 'profile')}
				href="/settings/profile">Profile</a
			>
		</li>
		<li class="mr-3">
			<a
				class:tab-active={current === 'crud'}
				on:click={() => (current = 'crud')}
				href="/settings/crud">CRUD</a
			>
		</li>
		<li class="mr-3">
			<a
				class:tab-active={current === 'about'}
				on:click={() => (current = 'about')}
				href="/settings/about">About</a
			>
		</li>
		<li class="mr-3">
			<a
				class:tab-active={current === 'album'}
				on:click={() => (current = 'album')}
				href="/settings/album">Album</a
			>
		</li>

		<li class="mr-3">
			<a
				class:tab-active={current === 'todos'}
				on:click={() => (current = 'todos')}
				href="/settings/todos">Todos</a
			>
		</li>
		<li class="mr-3">
			<a
				class:tab-active={current === 'typing'}
				on:click={() => (current = 'typing')}
				href="/settings/typing">Typing Game</a
			>
		</li>
		<li class="mr-3">
			<a
				class:tab-active={current === 'keypad'}
				on:click={() => (current = 'keypad')}
				href="/settings/keypad">Keypad</a
			>
		</li>
		<li class="mr-3">
			<a
				class:tab-active={current === 'websocket'}
				on:click={() => (current = 'websocket')}
				href="/settings/websocket">Websocket</a
			>
		</li>
	</ul>
</div>

<slot />

<style lang="postcss">
	a {
		@apply inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3;
	}

	h1 {
		@apply text-xl  m-4 text-indigo-600;
	}
</style>

<script>
	import ColorManager from '$lib/ColorManager.svelte';
	import Color from '$lib/Color.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	import { onMount, beforeUpdate, afterUpdate, onDestroy, tick } from 'svelte';

	beforeUpdate(async () => {
		console.log('the component is about to update');
		await tick();
		console.log('the component just updated after tick');
	});

	onMount(() => {
		console.log('the component has mounted');
	});

	afterUpdate(() => {
		console.log('the component just updated via after Update');
	});

	onDestroy(() => {
		console.log('the component is being destroyed');
	});
</script>

<h1>Profile Settings</h1>

<button class="m-4" on:click={() => dispatch('notify', 'detail value')}>Fire Event</button>

<ColorManager let:colors>
	{#each colors as color}
		<Color {color} />
	{:else}
		<p class="mx-4">Please enter a color !</p>
	{/each}
</ColorManager>

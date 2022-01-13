<script>
	import { fade } from 'svelte/transition';
	export let color;
</script>

<div style="background:{color}" transition:fade />

<style>
	div {
		width: 200px;
		height: 50px;
		margin: 10px;
	}
</style>

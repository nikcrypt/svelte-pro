<script lang="ts">
	export let title;
	export let selected;

	function capitalizeFirstLetter(string: String) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const capitalize = capitalizeFirstLetter(title);

	function handleClick() {
		console.log('clicked');
	}
</script>

{#if selected}
	<a class="tab-active" href="/settings/{title}" on:click={() => handleClick()}>{capitalize}</a>
{:else}
	<a class="tab" href="/settings/{title}" on:click={() => handleClick()}>{capitalize} </a>
{/if}

<slot {title} />

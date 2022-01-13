<script>
	let colors = [];
	let value = '';

	function handleSubmit() {
		colors = colors.concat(value);
		value = '';
	}
</script>

<form class="bg-white shadow-md rounded mx-4 mb-4 w-fit" on:submit|preventDefault={handleSubmit}>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="color"> Color </label>
		<input class="block text-gray-700 text-sm font-bold mb-2 p-2" for="Color" bind:value />
	</div>
</form>

<slot {colors} />

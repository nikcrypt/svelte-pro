<script>
	let people = [
		{ first: 'Hans', last: 'Emil' },
		{ first: 'Max', last: 'Mustermann' },
		{ first: 'Roman', last: 'Tisch' }
	];

	let prefix = '';
	let first = '';
	let last = '';
	let i = 0;

	$: filteredPeople = prefix
		? people.filter((person) => {
				const name = `${person.last}, ${person.first}`;
				return name.toLowerCase().startsWith(prefix.toLowerCase());
		  })
		: people;

	$: selected = filteredPeople[i];

	$: reset_inputs(selected);

	function create() {
		people = people.concat({ first, last });
		i = people.length - 1;
		first = last = '';
	}

	function update() {
		selected.first = first;
		selected.last = last;
		people = people;
	}

	function remove() {
		// Remove selected person from the source array (people), not the filtered array
		const index = people.indexOf(selected);
		people = [...people.slice(0, index), ...people.slice(index + 1)];

		first = last = '';
		i = Math.min(i, filteredPeople.length - 2);
	}

	function reset_inputs(person) {
		first = person ? person.first : '';
		last = person ? person.last : '';
	}
</script>

<div class="flex flex-col p-2 ml-4 w-fit">
	<input placeholder="filter prefix" bind:value={prefix} />

	<div class="flex mt-4">
		<select class="appearance-none" bind:value={i} size={5}>
			{#each filteredPeople as person, i}
				<option class="mx-4 mb-1 text-slate-800" value={i}>{person.last}, {person.first}</option>
			{/each}
		</select>

		<label><input bind:value={first} placeholder="first" /></label>
		<label><input bind:value={last} placeholder="last" /></label>
	</div>
</div>

<div class="flex flex-row text-blue-800 ml-4 ">
	<button on:click={create} disabled={!first || !last}>Create</button>
	<button on:click={update} disabled={!first || !last || !selected}>Update</button>
	<button on:click={remove} disabled={!selected}>Delete</button>
</div>

<style>
	button {
		@apply bg-indigo-500 text-white font-normal p-2 rounded-lg m-2;
	}
	input {
		@apply text-slate-700  w-fit ml-2 border-2 p-2;
	}
</style>

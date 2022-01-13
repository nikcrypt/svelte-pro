<script>
	import { onMount } from 'svelte';

	import { messageStore } from './store.js';
	import Message from '$lib/Message.svelte';
	let message = '';
	let messages = [];

	let name = 'Chat';
	let value = '';
	let socket;

	onMount(() => {
		socket = new WebSocket('ws://127.0.0.1:8080/ws/');
		socket.addEventListener('open', () => {
			console.log('Opened');
			socket.send('Hello Server!');
		});

		// Listen for messages
		socket.addEventListener('message', function (event) {
			console.log(event.data);
			message = event.data;
			messageStore.set(event.data);
		});
	});

	messageStore.subscribe((currentMessage) => {
		messages = [...messages, currentMessage];
	});

	function handleSubmit() {
		if (value.length > 0) {
			socket.send(value);
			value = '';
		}
	}
</script>

<h1>Hello {name}!</h1>
<input class="border-2 border-slate-700 p-2 ml-4" bind:value />
<button class="bg-blue-700 text-white rounded-xl p-2 ml-4 font-medium" on:click={handleSubmit}
	>Send</button
>
{#each messages as message, i}
	<Message {message} direction={i % 2 == 0 ? 'left' : 'right'} />
{/each}

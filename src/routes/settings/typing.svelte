<script>
	let value = '';
	let start = false;
	let btn = 'Start';
	let countdown = 0;
	let timer;
	let result = '';
	let para = 'It is an endless river.';

	function startgame() {
		if (start === false) {
			startTimer();
			btn = 'Stop';
			start = !start;
		} else {
			btn = 'Start';
			calSpeed();
			countdown = 0;
			clearInterval(timer);
			timer = null;
			start = !start;
		}
	}

	function startTimer() {
		timer = setInterval(() => {
			countdown += 1;
		}, 1000);
	}

	function calSpeed() {
		const words = value.split(' ');
		const len = words.length;
		var speed = (len * 60) / countdown;
		result = 'You typed ' + len + ' words with speed of ' + speed + ' w.p.m';
	}
</script>

<h1>Typing Game</h1>
<div class="flex flex-col justify-center items-center">
	<p class="font-mono text-lg text-slate-800 ml-4  w-2/3 mb-4">{para}</p>
	<p class="font-mono text-lg text-indigo-800 ml-4  w-2/3 m-2">{value}</p>
	<textarea class="border-2 border-cyan-600 w-2/3 h-56 ml-4" bind:value />
	<div class="flex">
		<button class:active={start === true} on:click={startgame}>{btn}</button>
		<h2 class="m-6  text-purple-900 text-xl">{countdown}</h2>
		<p>{result}</p>
	</div>
</div>

<style>
	button {
		@apply bg-green-700 text-white font-medium rounded-lg w-fit p-4 mt-4;
	}
	.active {
		@apply bg-red-600;
	}
</style>

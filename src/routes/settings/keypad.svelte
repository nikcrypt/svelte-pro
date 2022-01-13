<script>
	let key;
	let keyCode;
	let text = '';
	let quote = 'The ability to observe without evaluating is the highest form of intelligence.';
	let string = `here's some <strong>HTML!!!</strong>`;
	let countdown = 0;
	let timer;
	let result = '';
	function handleKeydown(event) {
		key = event.key;
		keyCode = event.keyCode;
		if ((keyCode > 64 && keyCode < 91) || (keyCode > 185 && keyCode < 193)) {
			text += key;
		} else if (keyCode == 8) {
			text = text.slice(0, -1);
		} else if (keyCode == 32) {
			text += ' ';
		}
		if (text.length == 1) {
			startTimer();
		} else if (text.length == quote.length) {
			calSpeed();
		} else if (text.length == 0) {
			clearInterval(timer);
			timer = null;
		}
	}

	function calSpeed() {
		const words = text.split(' ');
		const len = words.length;
		var speed = (len * 60) / countdown;
		result = 'You typed ' + len + ' words with speed of ' + speed + ' w.p.m';
		countdown = 0;
		clearInterval(timer);
		timer = null;
	}

	function startTimer() {
		result = '';
		timer = setInterval(() => {
			countdown += 1;
		}, 1000);
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div style="text-align: center">
	{#if key}
		<p>{key === ' ' ? 'Space' : key}</p>
		<p>{keyCode}</p>
	{:else}
		<p>Focus this window and press any key</p>
	{/if}
	<p class="text-lg font-mono text-blue-800" />
</div>

<div class="relative">
	<div class="fixed top-140 left-80 right-0">
		<p class="text-slate-400">{quote}</p>
	</div>
	<div class="fixed top-140 left-80 right-0">
		<p class="text-fuchsia-900">{text}</p>
	</div>
</div>
<div class="m-4">
	<p class="text-slate-800 font-medium text-lg">Timer: {countdown}</p>
	<p class="text-slate-800 font-medium text-lg">{result}</p>
</div>

<style>
</style>

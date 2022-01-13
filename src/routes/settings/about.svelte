<script>
	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<h1>About</h1>
<div
	class="bg-blue-200 text-slate-800 font-serif m-4 p-2 w-2/3 h-2/3"
	on:mousemove={handleMousemove}
>
	The mouse position is {m.x} x {m.y}
</div>

<script>
	import { onMount } from 'svelte';

	let seconds = 0;

	onMount(() => {
		const interval = setInterval(() => {
			seconds += 1;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<!-- data-sveltekit-reload will make this page reload when go another route -->
<nav data-sveltekit-reload>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<slot />

<p>the page has been open for {seconds} seconds</p>

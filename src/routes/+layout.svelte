<script>
	import { navigating } from '$app/stores';

	let previous;
	let start;
	let end;

	$: if ($navigating) {
		start = Date.now();
		end = null;
		previous = $navigating;
	} else {
		end = Date.now();
	}
</script>

<nav>
	<a href="/">home</a>
    <!-- preloading is for make data load quickly by event listener -->
	<a href="/slow-a" data-sveltekit-preload-data="hover">slow-a</a>
	<a href="/slow-b">slow-b</a>
</nav>

<slot />

{#if previous && end}
	<p>navigated from {previous.from.url.pathname} to {previous.to.url.pathname} in <strong>{end - start}ms</strong></p>
{/if}
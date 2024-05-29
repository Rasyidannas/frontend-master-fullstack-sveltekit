<script lang="ts">
	import type { MovieListResult } from '$lib/type';
	import { media } from '$lib/api';

	export let movies: MovieListResult;
</script>

<div class="carousel">
	{#each movies as movie}
		<a href={`/movie/${movie.id}`}>
			<img alt={movie.title} src={media(movie.poster_path, 500)} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));
		display: flex;
		height: 10rem;
		gap: 1rem;
		overflow-x: scroll;
		scroll-snap-type: mandatory;
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
	}

	a {
		height: 100%;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	img {
		height: 100%;
	}
</style>

// this is using +page.js than +server.js because no secret key is needed
import * as api from '$lib/api.js';
import type { MovieDetails, MovieList } from '$lib/type.js';

export async function load({ fetch }) {
	const trending = (await api.get(fetch, 'trending/movie/day')) as MovieList;

	const featured = (await api.get(fetch, `movie/${trending.results[0].id}`, {
		append_to_response: 'images'
	})) as MovieDetails;

	return {
		trending,
		featured
	};
}

//Server-side rendering (SSR) is the process of generating HTML on the server, and is what SvelteKit does by default. It's important for performance and resilience, and is very beneficial for search engine optimization (SEO) — while some search engines can index content that is rendered in the browser with JavaScript, it happens less frequently and reliably.

export const ssr = false; //this will set SSR and into SPA mode

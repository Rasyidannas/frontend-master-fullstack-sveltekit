//+page.js is for to load data from the server when doing a client-side navigation. This is different with +page.server.js

import component from "./red.svelte";

export function load() {
  return {
    color: "red",
    component,
  };
}

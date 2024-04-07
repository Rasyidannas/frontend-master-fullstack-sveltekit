// Unexpected error will throw when in bug app

export function load() {
  throw new Error("Kaboom!");
}

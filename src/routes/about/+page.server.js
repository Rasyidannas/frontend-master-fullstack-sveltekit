export function load() {
  return new Promise((fulfil) => {
    setTimeout(fulfil, 1000);
  });
}

export async function load({ parent }) {
  // this a and b from parent (+layout.js and +layout.server.js)
  const { a, b } = await parent();
  return { c: a + b };
}

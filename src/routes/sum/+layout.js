export async function load({ parent }) {
  //this will get data from parent (+layout.server.js)
  const { a } = await parent();
  return { b: a + 1 };
}

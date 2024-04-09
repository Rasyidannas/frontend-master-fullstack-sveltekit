//hooks is ways to run code before or after a request is made to the server for intercept and override the framework's default behavior.

export async function handle({ event, resolve }) {
  if (event.url.pathname === "/ping") {
    return new Response("pong");
  }

  return await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace("<body", '<body style="color: hotpink"'),
  });
}

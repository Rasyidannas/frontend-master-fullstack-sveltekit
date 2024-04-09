//hooks is ways to run code before or after a request is made to the server for intercept and override the framework's default behavior.

export async function handleFetch({ event, request, fetch }) {
  const url = new URL(request.url);
  //in here we are responding to request /a/+server.js with /b/+server.js
  if (url.pathname === "/a") {
    return await fetch("/b");
  }

  return await fetch(request);
}

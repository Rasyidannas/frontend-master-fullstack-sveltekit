//hooks is ways to run code before or after a request is made to the server for intercept and override the framework's default behavior.

export async function handle({ event, resolve }) {
  event.locals.answer = 42; //this for send data to the route

  return await resolve(event);
}

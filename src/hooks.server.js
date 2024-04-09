//hooks is ways to run code before or after a request is made to the server for intercept and override the framework's default behavior.

export function handleError({ event, error }) {
  console.error(error.stack);

  return {
    message: "everything is fine",
    code: "JEREMYBEARIMY",
  };
}

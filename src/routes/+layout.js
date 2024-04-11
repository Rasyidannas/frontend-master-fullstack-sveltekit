export async function load({ depends }) {
  // This is for register dependency
  depends("data:now");

  return {
    now: Date.now(),
  };
}

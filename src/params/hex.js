//in params folder we can prevent the router from matching on invalid input, you can specify a matcher.
export function match(value) {
  return /^[0-9a-f]{6}$/.test(value);
}

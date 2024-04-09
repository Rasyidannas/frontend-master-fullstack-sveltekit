//(authed) is way to Route Gropus and we can give the logic/middleware
import { redirect } from "@sveltejs/kit";

export function load({ cookies, url }) {
  if (!cookies.get("logged_in")) {
    throw redirect(303, `/login?redirectTo=${url.pathname}`); //this will allow user go to /login route first and then will redirect the last route visited
  }
}

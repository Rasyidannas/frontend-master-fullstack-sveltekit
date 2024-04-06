import { json } from "@sveltejs/kit";

//in here we can create API
export function GET() {
  const number = Math.floor(Math.random() * 6) + 1;

  //   return new Response(number, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //this is same like above
  return json(number);
}

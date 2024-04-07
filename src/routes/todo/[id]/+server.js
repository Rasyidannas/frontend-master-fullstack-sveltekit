import * as database from "$lib/server/database.js";

export async function PUT({ params, request, cookies }) {
  const { done } = await request.json();
  const userid = cookies.get("userid");

  await database.toggleTodo({
    userid,
    id: params.id, //this is from [id] in routes/todo
    done,
  });

  return new Response(null, { status: 204 });
}

export async function DELETE({ params, cookies }) {
  const userid = cookies.get("userid");

  await database.deleteTodo({
    userid,
    id: params.id, //this is from [id] in routes/todo
  });

  return new Response(null, { status: 204 });
}

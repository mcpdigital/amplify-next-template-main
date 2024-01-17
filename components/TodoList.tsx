// components/TodoList.tsx
"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function TodoList() {
  const [todos, setTodos] = useState<Schema["Todo"][]>([]);

  async function listTodos() {
    // fetch all todos
    const { data } = await client.models.Todo.list();
    setTodos(data);
  }

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe(({ items }) =>
      setTodos([...items])
    );

    return () => sub.unsubscribe();
  }, []);

  return (
    <div className="p-4 flex flex-col justify-center">
      <h1 className="text-4xl">Todos</h1>
      <button
        className="mt-1 p-1 max-w-[100px] rounded-md dark:bg-slate-200 dark:text-slate-800 bg-slate-800 text-slate-200"
        onClick={async () => {
          // create a new Todo with the following attributes
          const { errors, data: newTodo } = await client.models.Todo.create({
            // prompt the user to enter the title
            content: window.prompt("title"),
            done: false,
            priority: "medium",
          });
          console.log(errors, newTodo);
        }}
      >
        Create{" "}
      </button>

      <ul className=" text-2xl mt-4 max-w-screen-xl bg-slate-950">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}

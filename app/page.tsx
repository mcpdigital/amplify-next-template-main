// app/page.tsx
"use client";
// npx amplify sandbox --profile mcp para iniciar o server com authentication e data
//import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import TodoList from "@/components/TodoList";

function App() {
  return (
    <>
      <h1 className="dark:text-slate-100">Hello, Amplify 👋</h1>
      <></>
      <>
        <TodoList />
      </>
    </>
  );
}

//export default withAuthenticator(App);
export default App;

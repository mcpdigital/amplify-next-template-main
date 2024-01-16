"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials", loginData);
      setAlert({ status: "success", message: "Login successfully" });
      setLoginData({ email: "", password: "" });
    } catch (error: any) {
      console.log({ error });
      setAlert({ status: "error", message: "Something went wrong" });
    }
  };
  return (
    <div className="p-4 dark:bg-slate-900 dark:text-gray-200 bg-slate-500">
      <h3>Login Page</h3>
      <form onSubmit={onSubmit} title="Login">
        <div>
          <label title="Email" htmlFor="email">
            Email
          </label>
          <input placeholder="Email" name="email" type="email" required />
        </div>

        <div>
          <label title="PasswordT" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Do not have an account?{" "}
        <Link href="/auth/register">Create an account</Link>
      </div>
    </div>
  );
};

export default LoginPage;

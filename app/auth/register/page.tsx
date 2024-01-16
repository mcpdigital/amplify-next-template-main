"use client";
import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [alert, setAlert] = useState({
    status: "",
    message: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(registerData),
      });
      setAlert({ status: "success", message: "Signup successfully" });
      setRegisterData({ name: "", email: "", password: "" });
    } catch (error: any) {
      console.log({ error });
      setAlert({ status: "error", message: "Something went wrong" });
    }
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Register Page</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            title="Name"
            onChange={onChange}
            value={registerData.name}
            type="text"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            title="Email"
            onChange={onChange}
            value={registerData.email}
            type="email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            title="Password"
            onChange={onChange}
            value={registerData.password}
            type="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Create account</button>
      </form>
      <div>
        Already have an account? <Link href="/auth/login">Login here</Link>
      </div>
    </div>
  );
};

export default RegisterPage;

// pages/login.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { setToken } from "@/lib/auth";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("redirect");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        setToken(response, router, callbackUrl);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/musical-colorful-notes-dark-background_1017-32302.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais")',
      }}
    >
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-gray-900">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-white">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInput}
              className="w-full p-3 bg-gray-800 rounded text-gray-100 font-semibold"
              required
              placeholder="Enter the username"
            />
          </div>

          <div>
            <label className="text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className="w-full p-3 bg-gray-800 rounded text-gray-100 font-semibold"
              required
              placeholder="Enter the email"
            />
          </div>

          <div>
            <label className="text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              className="w-full p-3 bg-gray-800 rounded text-gray-100 font-semibold"
              required
              placeholder="Enter the password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-500 rounded-md hover:bg-red-400 text-white font-semibold"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-white">Already have an account? </span>
          <Link href="/login">
            <span className="text-red-400 hover:underline">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

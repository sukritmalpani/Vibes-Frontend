// pages/login.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { setToken } from "@/lib/auth";
import { useSongsContext } from "@/lib/songsContext";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { songs, updateSongs } = useSongsContext();
  console.log(songs);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("redirect");
  const [data, setData] = useState(null);
  // console.log(callbackUrl);
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
      .post("http://localhost:1337/api/auth/local", {
        identifier: formData.email,
        password: formData.password,
      })
      .then((response: any) => {
        setData(response);
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        setToken(response, router, callbackUrl);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
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
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className="w-full p-3 bg-gray-800 rounded text-gray-100 font-semibold"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-red-600 rounded-md hover:bg-red-500 text-white font-semibold"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4 flex flex-col items-center justify-center">
          <span className="text-white">Don't have an account? </span>
          <Link href="/register">
            <span className="inline-block text-red-400 hover:underline">
              Register
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

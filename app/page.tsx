"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const fetcher = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/songs`);
  const data = await response.json();
  console.log(data);
};
export default function Home() {
}

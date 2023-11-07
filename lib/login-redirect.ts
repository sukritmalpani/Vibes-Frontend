// import { useParams } from "next/navigation";
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import { useHistory, useLocation, useParams } from "navigation";

const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const LoginRedirect = (props: any) => {
  const [text, setText] = useState("Loading...");
  //   const location = useLocation();
  const params = useParams();
  const history = useRouter();

  useEffect(() => {
    fetch(
      `${backendUrl}/auth/${params.providerName}/callback${location.search}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("username", res.user.username);
        setText(
          "You have been successfully logged in. You will be redirected in a few seconds..."
        );
        setTimeout(() => history.push("/"), 3000);
      })
      .catch((err) => {
        console.log(err);
        setText("An error occurred, please see the developer console.");
      });
  }, [history, location.search, params.providerName]);
};

export default LoginRedirect;

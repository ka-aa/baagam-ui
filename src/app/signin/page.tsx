"use client"

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import "./signin.css";

export default function SignIn() {
  const isUserLoggedIn = false;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isUserLoggedIn) {
      redirect('/');
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <div>Loading...</div>

  return (<main className="signin-page flex justify-center items-center">
    <section className="">
      <form className="flex flex-col text-md">
        <fieldset className="flex flex-col mb-2">
          <label className="mx-1.5" htmlFor="email">Email</label>
          <input className="px-1.5 py-0.5 border-2 border-slate-100 rounded-md focus:outline-none focus:border-blue-200" id="email" type="email" placeholder="user@example.com" />
        </fieldset>

        <fieldset className="flex flex-col">
          <label className="mx-1.5" htmlFor="password">Password</label>
          <input className="px-1.5 py-0.5 border-2 border-slate-100 rounded-md focus:outline-none focus:border-blue-200" id="password" type="password" placeholder="password" />
        </fieldset>
      </form>
    </section>
  </main>)
}
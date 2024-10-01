import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"> Register</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="*********"
          className="border p-3 rounded-lg"
          id="Password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            register
        </button>
      </form>
      <div className=" flex gap-2 mt-5">
        <p>Have a account?</p>
        <Link to={"/login"}>
        <span className="text-blue-700 font-bold" > LogIn</span>
        </Link>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Signing in with:", { email, password });
    alert("Form submitted. Check the console for the data.");
  };

  const handleGitHubLogin = () => {
    console.log("Redirecting to GitHub for authentication...");
    alert("GitHub login initiated. Check the console.");
  };

  return (
    <div className="flex justify-center items-center h-screen font-sans bg-gray-100">
      <div className="flex bg-white p-10 rounded-lg shadow-lg gap-10">
        <div className="flex-1 min-w-[300px]">
          <h2 className="mb-5 text-2xl font-bold text-gray-800">Sign In</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2.5 rounded border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2.5 rounded border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2.5 border-none rounded bg-blue-500 text-white cursor-pointer text-base hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center min-w-[300px] border-l border-gray-200 pl-10">
          <h2 className="mb-5 text-2xl font-bold text-gray-800">Or</h2>
          <button
            onClick={handleGitHubLogin}
            className="w-full p-2.5 border-none rounded bg-gray-800 text-white cursor-pointer text-base flex items-center justify-center gap-2.5 hover:bg-gray-900"
          >
            <svg
              height="20"
              viewBox="0 0 16 16"
              version="1.1"
              width="20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            Sign In with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

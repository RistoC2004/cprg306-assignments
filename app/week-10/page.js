"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg text-center">
      {!user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Welcome to the Shopping List App</h1>
          <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
            Login with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="text-xl mb-4">Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mb-4">
            Logout
          </button>
          <Link href="/week-9/shopping-list" className="text-blue-500 underline">
            Go to Shopping List
          </Link>
        </>
      )}
    </div>
  );
}

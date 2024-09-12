"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../config.js";

const Dashboard = () => {
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <div className="p-8 rounded-lg shadow-md flex items-center">
    <div className="flex items-center space-x-4">
      {/* User Image */}
      {user?.photoURL ? (
        <img
          key={user.photoURL}
          src={user.photoURL}
          alt="User Profile"
          className="w-16 h-16 rounded-full"
        />
      ) : (
        <img
          src="/img/profile.png"
          alt="User Profile"
          className="w-16 h-16 rounded-full"
        />
      )}
      
      {/* Welcome Text */}
      <h1 className="text-3xl font-bold">
        Welcome to the Dashboard, {user ? user.displayName : "Guest"}!
      </h1>
    </div>
    {/* Logout Button */}
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-24"
    >
      Logout
    </button>
  </div>
</div>

  );
};

export default Dashboard;
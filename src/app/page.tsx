import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Find Your Perfect Restaurant
        </h1>
        <p className="text-lg mb-8 w-2/3 text-center">
          Discover new and exciting food options near you.
        </p>
        <Link
          className="bg-primary center h-16 px-12 text-2xl rounded-xl text-white"
          href="/profile-creation"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

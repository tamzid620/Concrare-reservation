import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! The page you are looking for does not exist.</p>
        <Link href="/">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Go Home
          </button>
        </Link>
      </div>
    );
};

export default NotFound;
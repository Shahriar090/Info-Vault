import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <main className="min-h-screen px-4 py-10 bg-gray-50 text-gray-900">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">📚 Welcome to Info Vault</h1>
        <p className="text-lg mb-6">
          Your go-to resource for understanding and exploring our API and developer tools.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/docs/introduction"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/docs/quick-start"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
          >
            Quick Start Guide
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🛠 Core Concepts</h2>
          <p className="text-sm text-gray-700">
            Learn about our API architecture, authentication, rate limits, and more.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📦 SDKs</h2>
          <p className="text-sm text-gray-700">
            Explore SDKs for JavaScript, Python, and more — ready to plug and play.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">📘 API Reference</h2>
          <p className="text-sm text-gray-700">
            Full documentation of endpoints, request formats, and responses.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🧪 Testing</h2>
          <p className="text-sm text-gray-700">
            Use our test environment to safely experiment with your integration.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;

import React from 'react';

const Sidebar = () => {
  return (
     <aside className="w-full h-screen  bg-gray-800 text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-bold mb-8">
        Info Vault
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-4 text-lg">
        <a href="#" className="hover:text-purple-400 transition">Dashboard</a>
        <a href="#" className="hover:text-purple-400 transition">Documents</a>
        <a href="#" className="hover:text-purple-400 transition">Categories</a>
        <a href="#" className="hover:text-purple-400 transition">Users</a>
        <a href="#" className="hover:text-purple-400 transition">Settings</a>
      </nav>

    </aside>
  );
};

export default Sidebar;
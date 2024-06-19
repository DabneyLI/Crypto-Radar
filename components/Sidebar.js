// components/Sidebar.js
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Funds', path: '/funds' },
    { name: 'Projects', path: '/projects' },
    { name: 'Categories', path: '/categories' },
    { name: 'Platforms', path: '/platforms' },
    { name: 'Events', path: '/events' },
    { name: 'News', path: '/news' },
  ];

  return (
    <div className="w-64 h-screen bg-blue-700 text-white fixed top-0 left-0 z-40 pt-16">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Crypto Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className={router.pathname === item.path ? 'bg-blue-500' : ''}>
                <Link href={item.path} legacyBehavior>
                  <a className="block text-lg px-4 py-2 hover:bg-blue-500 rounded-md transition duration-200">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
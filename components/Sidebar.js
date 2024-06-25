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
    <div className="w-48 h-screen bg-primary text-white fixed top-0 left-0 z-40 pt-16">
      <div className="p-4">
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name} className={router.pathname === item.path ? 'bg-secondary' : ''}>
                <Link href={item.path} legacyBehavior>
                  <a className="block text-sm px-4 py-2 hover:bg-secondary rounded-md transition duration-200">
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
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", labelCn: "首页" },
    { path: "/hall-origins", label: "Hall of Origins", labelCn: "起源厅" },
    { path: "/craft-life", label: "Craft and Life", labelCn: "匠艺厅" },
    { path: "/word-metal", label: "Word and Metal", labelCn: "铭文厅" },
    { path: "/future-design", label: "Future and Design", labelCn: "未来厅" }
  ];

  return (
    <nav className={`fixed top-0 w-full bg-black/50 backdrop-blur-sm text-gray-100 py-4 z-50 flex justify-center gap-8 text-center text-sm md:text-base ${className}`}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`transition block whitespace-pre-line leading-tight ${
              isActive 
                ? "text-red-400" 
                : "hover:text-red-400"
            }`}
          >
            {`${item.label}\n${item.labelCn}`}
          </Link>
        );
      })}
    </nav>
  );
}

import { RiBookShelfLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "px-3 py-1 rounded bg-blue-100 text-blue-700"
      : "text-slate-700 hover:text-blue-700";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2 rounded-md">
            <RiBookShelfLine />
          </div>
          <span className="font-semibold text-lg">BookBazaar</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-semibold">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/browse" className={linkClasses}>
            Browse Books
          </NavLink>
          <NavLink to="/post" className={linkClasses}>
            Post Book
          </NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 font-semibold">
          <button
            onClick={() => nav("/login")}
            className="px-4 py-1 rounded-lg border-2 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
          >
            Login
          </button>
          <button
            onClick={() => nav("/signup")}
            className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-900"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 gap-3 font-semibold">
            <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/browse" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Browse Books
            </NavLink>
            <NavLink to="/post" className={linkClasses} onClick={() => setMenuOpen(false)}>
              Post Book
            </NavLink>
            <button
              onClick={() => {
                nav("/login");
                setMenuOpen(false);
              }}
              className="px-4 py-1 rounded-lg border-2 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
            >
              Login
            </button>
            <button
              onClick={() => {
                nav("/signup");
                setMenuOpen(false);
              }}
              className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-900"
            >
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

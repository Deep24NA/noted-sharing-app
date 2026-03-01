import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold">MyApp</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Overlay Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-fit bg-transparent shadow-lg md:hidden">
          <div className="px-4 py-4 space-y-2 text-black">
            <a href="#" className="block hover:text-blue-400 ">Home</a>
            <a href="#" className="block hover:text-blue-400">About</a>

            {/* Dropdown */}
            <div>
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex justify-between w-full hover:text-yellow-400"
              >
                Services <ChevronDown size={16} />
              </button>

              {dropdown && (
                <div className="ml-4 mt-2 space-y-1">
                  <a href="#" className="block hover:text-yellow-400">
                    Web Dev
                  </a>
                  <a href="#" className="block hover:text-yellow-400">
                    App Dev
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="block hover:text-yellow-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
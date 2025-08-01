import Logo from "@/assets/logo/logo.png";
import clsx from "clsx";
import { Menu } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    { id: "services", name: "Services", href: "#services" },
    { id: "about", name: "About", href: "#about" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex fixed z-50 w-full justify-between items-center px-8 top-5 left-0">
      <img src={Logo} alt="Unsquare" className="w-36 aspect-auto" />
      <nav>
        {/* BIG SCREEN NAVIGATION */}
        <ul className="hidden sm:flex items-center gap-8 text-gray-100 font-Teachers text-lg">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="px-3 py-2 rounded-lg hover:bg-gray-200/30"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE DEVICES */}
        <ul
          className={clsx(
            "fixed -top-90 opacity-0 left-0 z-50 w-[calc(100vw-64px)] mx-8 mt-10 p-2 bg-gray-100/10 shadow-lg backdrop-blur-[4px] rounded-lg backdrop-brightness-50 transition-all duration-300",
            isOpen && "opacity-100 top-10"
          )}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="px-3 py-2 w-full rounded-lg text-gray-100 hover:bg-gray-200/30"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Menu
        onClick={() => toggleIsOpen()}
        className="text-gray-100 sm:hidden cursor-pointer"
      />
    </header>
  );
}

export default Header;

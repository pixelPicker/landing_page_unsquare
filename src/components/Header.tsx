import Logo from "@/assets/logo/logo.png";

function Header() {
  return (
    <header className="flex fixed z-50 w-full justify-between items-center px-8 top-5 left-0">
      <img src={Logo} alt="Unsquare Logo" className="w-36 aspect-auto" />
      <nav>
        <ul className="flex items-center gap-8 text-gray-100 font-Teachers text-lg">
          <li className="px-3 py-2 rounded-lg hover:bg-gray-200/30">
            <a href="#services">Services</a>
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-200/30">
            <a href="#about">About</a>
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-200/30">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import HeroBg from "@/assets/images/hero_bg.jpg";
import Logo from "@/assets/logo/logo.png";

function Hero() {
  return (
    <div className="w-screen h-screen relative font-Teachers">
      <img
        src={HeroBg}
        alt="Abstract Noise Image"
        className="w-full h-full object-cover fixed top-0 left-0 -z-10 brightness-50"
      />
      <div className="h-full">
        <div className="h-full relative">
          <Header />
          <Main />
        </div>
        <SidePanel />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex absolute w-full justify-between items-center px-8 top-5 left-0">
      <img src={Logo} alt="Unsquare Logo" className="w-36 aspect-auto" />
      <nav>
        <ul className="flex items-center gap-8 text-gray-100 font-Teachers text-lg">
          <li className="px-2 py-1 rounded-sm hover:bg-gray-200/30">
            <a href="#">Services</a>
          </li>
          <li className="px-2 py-1 rounded-sm hover:bg-gray-200/30">
            <a href="#">About</a>
          </li>
          <li className="px-2 py-1 rounded-sm hover:bg-gray-200/30">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Main() {
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("EMAIL - ", e.currentTarget);
  };

  return (
    <main className="px-8 flex flex-col justify-center text-center text-gray-100 h-full gap-5">
      <h1 className="text-6xl font-Bricolage-Grotesque">
        Build Digital Experiences <br /> That Drive Results
      </h1>
      <p className="text-xl font-Teachers max-w-[60ch] mx-auto">
        We craft scalable, high-performance websites and apps that elevate your
        brand, engage users, and accelerate growth.
      </p>
      <div className="w-1/3 mx-auto">
        <form
          action="POST"
          onSubmit={(e) => handleEmailSubmit(e)}
          className="grid grid-cols-3 shadow-lg"
        >
          <input
            type="text"
            name="email"
            required
            maxLength={60}
            id="landingEmail"
            className="border-[1.5px] border-gray-100/50 rounded-lg bg-gray-500/20 placeholder:font-Teachers py-2 px-4 col-start-1 col-end-4 row-start-1 row-end-2 focus-within:outline-none focus-visible:outline-none focus:outline-none"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="row-start-1 m-2 row-end-2 py-2 col-start-3 col-end-4 bg-gradient-to-r from-0% from-gray-500/60 to-100% to-gray-100/50 rounded-lg border-[1.5px] border-gray-100/50 cursor-pointer hover:from-gray-400/60 hover:to-gray-100/70 transition-all"
          >
            Schedule Now
          </button>
        </form>
      </div>
    </main>
  );
}

function SidePanel() {
  return (
    <div className="px-8 h-3/4 w-2/3 mx-auto">
      <div className="bg-gray-100/20 mx-auto shadow-lg backdrop-blur-lg h-full rounded-b-lg">
        <p>Hola</p>
      </div>
    </div>
  );
}

export default Hero;

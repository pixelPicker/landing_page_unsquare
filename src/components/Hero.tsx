import MoonMascot from "@/assets/images/moon_mascot.svg";
import DiamondMascot from "@/assets/images/diamond_mascot.svg";
import Logo from "@/assets/logo/logo.png";

function Hero() {
  return (
    <div className="w-screen h-screen relative font-Teachers overflow-hidden">
      <img
        className={`animate-bgscroll bg-[url("../src/assets/images/hero_bg.jpg")] w-full h-full bg-size-[200%] object-cover fixed top-0 left-0 -z-10 brightness-20 blur-[10px]`}
      />
      <div className="h-full">
        <div className="h-full relative">
          <Header />
          <Main />
        </div>
      </div>
      <div className="w-full h-1/4 bg-gradient-to-b from-black/0 to-black absolute bottom-0 left-0" />
    </div>
  );
}

function Header() {
  return (
    <div className="flex absolute w-full justify-between items-center px-8 top-5 left-0">
      <img src={Logo} alt="Unsquare Logo" className="w-36 aspect-auto" />
      <nav>
        <ul className="flex items-center gap-8 text-gray-100 font-Teachers text-lg">
          <li className="px-3 py-2 rounded-lg hover:bg-gray-200/30">
            <a href="#">Services</a>
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-200/30">
            <a href="#">About</a>
          </li>
          <li className="px-3 py-2 rounded-lg hover:bg-gray-200/30">
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
    <main className="px-8 flex flex-col justify-center text-center text-gray-300 h-full gap-5">
      <h1 className="text-6xl font-Bricolage-Grotesque text-white">
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
            className="border-[1.5px] border-gray-100/50 rounded-xl bg-gray-500/20 placeholder:font-Teachers py-2 px-4 col-start-1 col-end-4 row-start-1 row-end-2 focus-within:outline-none focus-visible:outline-none focus:outline-none"
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
      <div className="flex absolute top-1/2 -translate-y-1/2 items-center justify-between w-full px-14 pr-24">
        <img src={DiamondMascot} className="mb-36" />
        <img src={MoonMascot} className="mt-36" />
      </div>
    </main>
  );
}

export default Hero;

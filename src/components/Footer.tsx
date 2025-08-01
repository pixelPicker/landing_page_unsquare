import Logo from "@/assets/logo/logo.png";
function Footer() {
  return (
    <footer
      id="footer"
      className="w-full pt-20 relative py-18 px-14 text-gray-100 font-Teachers"
    >
      <div id="contact" className="grid md:grid-cols-2 gap-12">
        <div className="w-4/5">
          <h2 className="text-2xl font-bricolage mb-4">Let's work together</h2>
          <FooterForm />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <img src={Logo} className="w-36 aspect-auto" />
            <p className="text-white/60 mb-6 px-4 ">
              Building experiences that inspire.
              <br />
              Websites, apps, e-commerce, automation—tailored for your growth.
            </p>
          </div>
          <div className="flex px-4 space-x-4 mt-6">
            <a href="#" className="hover:text-white/80">
              Twitter
            </a>
            <a href="#" className="hover:text-white/80">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white/80">
              GitHub
            </a>
            <a href="#" className="hover:text-white/80">
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center text-white/40 text-sm font-teachers">
        © {new Date().getFullYear()} Unsquare. All rights reserved.
      </div>
    </footer>
  );
}

function FooterForm() {
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form
      onSubmit={(e) => handleEmailSubmit(e)}
      className="grid grid-cols-3 shadow-lg"
    >
      <input
        type="text"
        name="email"
        required
        maxLength={60}
        id="landingEmail"
        className="border-[1.5px] border-gray-100/50 rounded-xl bg-gray-500/20 placeholder:font-teachers py-2 px-4 col-start-1 col-end-4 row-start-1 row-end-2 focus:outline-none text-white placeholder:text-white/60"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="row-start-1 m-2 row-end-2 py-2 col-start-3 col-end-4 bg-gradient-to-r from-gray-500/60 to-gray-100/50 rounded-lg border-[1.5px] border-gray-100/50 cursor-pointer hover:from-gray-400/60 hover:to-gray-100/70 transition-all text-sm font-bricolage"
      >
        Schedule Now
      </button>
    </form>
  );
}

export default Footer;

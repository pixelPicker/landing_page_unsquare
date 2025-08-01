import Collaborator1 from "@/assets/logo/collaborator1.webp";
import Collaborator2 from "@/assets/logo/collaborator2.webp";
import Collaborator3 from "@/assets/logo/collaborator3.svg";
import Collaborator4 from "@/assets/logo/collaborator4.png";

function About() {
  return (
    <section
      id="about"
      className="px-8 py-20 bg-black text-gray-100 font-Teachers relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FirstAbout />

        <SecondAbout />
      </div>
    </section>
  );
}

function FirstAbout() {
  return (
    <div className="relative pt-0 pb-4 px-[2px] rounded-b-xl bg-gradient-to-t from-0% from-gray-500/80 to-100% to-gray-100/0 h-full">
      <div className="space-y-6 h-full bg-black rounded-b-xl p-14">
        <h2 className="text-4xl font-medium leading-tight tracking-tight font-Bricolage-Grotesque">
          This isn't just development.
          <br />
          It's a mindset.
        </h2>
        <p className="text-muted-foreground text-lg">
          We design, build, and ship products that break the mold. Our work
          spans web apps, mobile apps, e-commerce experiences, and more — all
          crafted with precision and purpose.
        </p>
      </div>
    </div>
  );
}

function SecondAbout() {
  const collaboratorImages = [
    Collaborator1,
    Collaborator3,
    Collaborator4,
    Collaborator2,
  ];
  return (
    <div className="relative h-full pb-0 pt-4 p-[4px] rounded-t-xl bg-gradient-to-b from-0% from-gray-500/80 to-100% to-gray-100/0 ">
      <div className="space-y-6 h-full bg-black rounded-t-xl p-14">
        <h2 className="text-4xl font-medium leading-tight tracking-tight font-Bricolage-Grotesque">
          We stand with our collaborators
        </h2>
        <div className="grid grid-cols-2 gap-y-2 place-items-center">
          {collaboratorImages.map((image) => (
            <img src={image} className="w-24  aspect-square object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

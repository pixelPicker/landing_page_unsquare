import Collaborator1 from "@/assets/logo/collaborator1.webp";
import Collaborator3 from "@/assets/logo/collaborator3.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  return (
    <section
      id="about"
      className="px-8 py-8 sm:py-20 bg-black text-gray-100 font-Teachers relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <FirstAbout />

        <SecondAbout />
      </div>
    </section>
  );
}

function FirstAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pt-0 pb-4 px-[2px] rounded-b-xl bg-gradient-to-t from-0% from-gray-500/80 to-100% to-gray-100/0 h-full"
    >
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
    </motion.div>
  );
}

function SecondAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%" });

  const collaboratorImages = [Collaborator1, Collaborator3];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative h-full pb-0 pt-4 p-[4px] rounded-t-xl bg-gradient-to-b from-0% from-gray-500/80 to-100% to-gray-100/0 "
    >
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
    </motion.div>
  );
}

export default About;

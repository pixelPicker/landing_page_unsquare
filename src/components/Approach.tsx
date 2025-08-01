import { motion, useInView } from "framer-motion";
import Pointer from "@/assets/images/pointer.svg";
import React, { useRef, useState } from "react";
import clsx from "clsx";

const Mottos = [
  {
    id: 1,
    title: "Clarity over complexity.",
    subtitle: "We build solutions you understand",
    transform: "lg:-translate-1/2",
  },
  {
    id: 2,
    title: "Speed with soul.",
    subtitle: "We move fast but never without meaning.",
    transform: "lg:-translate-1/2",
  },
  {
    id: 3,
    title: "Design that disappears.",
    subtitle: "Simple. Intuitive. No learning curve.",
    transform: "lg:-translate-x-1/1 lg:-translate-y-1/2",
  },
  {
    id: 4,
    title: "Crafted to outlast.",
    subtitle: "We don't just ship. We future-proof.",
    transform: "lg:-translate-x-1/1 lg:-translate-y-1/2",
  },
  {
    id: 5,
    title: "Partners, not vendors.",
    subtitle: "We stick around. We scale with you.",
    transform: "lg:-translate-x-1/1 lg:-translate-y-1/2",
  },
  {
    id: 6,
    title: "Human-first software.",
    subtitle: "Because users aren't just metrics.",
    transform: "lg:-translate-1/2",
  },
];

function Approach() {
  return (
    <div
      id="approach"
      className="w-full px-8 sm:px-14 bg-black pt-8 text-gray-100 font-Teachers"
    >
      <div className="grid items-end sm:grid-cols-2 gap-4 font-Bricolage-Grotesque">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-0% from-gray-500/60 to-100% to-gray-100/50">
          Want Results That <br /> Feel Human ?
        </h2>
        <h4 className="text-xl sm:text-2xl md:text-4xl underline underline-offset-$ sm:underline-offset-8">
          Try The Unsquare Approach
        </h4>
      </div>

      <RotationSection />
    </div>
  );
}

function RotationSection() {
  const circleRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = circleRef.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const rad = Math.atan2(dy, dx);
    const deg = rad * (180 / Math.PI);

    setAngle(deg + 90);
  };

  return (
    <div className="flex mt-8 sm:mt-40 pb-8 sm:pb-20 justify-center items-center">
      <div
        ref={circleRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setAngle(0)}
        className="size-[600px] lg:border border-gray-100/50 rounded-full relative"
      >
        <div className="lg:block hidden absolute w-full h-full rounded-full top-1/2 left-1/2 -translate-1/2 bg-radial from-0% from-gray-100/40 via-40% via-gray-100/30 to-black brightness-50" />
        <img
          src={Pointer}
          className="lg:block hidden absolute top-1/2 left-1/2 -translate-1/2 brightness-90"
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: "50% 50%",
            transition: "all",
          }}
        />
        {Mottos.map((motto, index) => {
          const angle = (360 / Mottos.length) * index;
          const radius = 270;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return <MottoCard motto={motto} x={x} y={y} />;
        })}
      </div>
    </div>
  );
}

function MottoCard({
  motto,
  x,
  y,
}: {
  motto: (typeof Mottos)[number];
  x: number;
  y: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      key={motto.id}
      className={clsx(
        "lg:absolute min-w-40 lg:min-w-0 lg:w-40 text-start left-0 top-0 border-[1.5px] border-gray-100/50 lg:border-0 p-2 rounded-lg lg:p-0 my-4 lg:my-0",
        motto.transform
      )}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      <h4 className="text-lg sm:text-2xl text-nowrap sm:font-medium">
        {motto.title}
      </h4>
      <p className="text-nowrap text-sm sm:text-lg">{motto.subtitle}</p>
    </motion.div>
  );
}

export default Approach;

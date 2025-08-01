import { motion, useMotionValue, useTransform } from "framer-motion";
import Pointer from "@/assets/images/pointer.svg";
import React, { useRef, useState } from "react";

const mottos = [
  {
    id: 1,
    title: "Clarity over complexity.",
    subtitle: "We build solutions you understand",
    transform: "translate(-50%, -50%)",
  },
  {
    id: 2,
    title: "Speed with soul.",
    subtitle: "We move fast but never without meaning.",
    transform: "translate(-50%, -50%)",
  },
  {
    id: 3,
    title: "Design that disappears.",
    subtitle: "Simple. Intuitive. No learning curve.",
    transform: "translate(-100%, -50%)",
  },
  {
    id: 4,
    title: "Crafted to outlast.",
    subtitle: "We don't just ship. We future-proof.",
    transform: "translate(-100%, -50%)",
  },
  {
    id: 5,
    title: "Partners, not vendors.",
    subtitle: "We stick around. We scale with you.",
    transform: "translate(-100%, -50%)",
  },
  {
    id: 6,
    title: "Human-first software.",
    subtitle: "Because users aren't just metrics.",
    transform: "translate(-50%, -50%)",
  },
];

function Approach() {
  return (
    <div className="w-full px-14 bg-black pt-8 text-gray-100 font-Teachers">
      <div className="grid items-end grid-cols-2 font-Bricolage-Grotesque">
        <h2 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-0% from-gray-500/60 to-100% to-gray-100/50">
          Want Results That <br /> Feel Human ?
        </h2>
        <h4 className="text-4xl underline underline-offset-8">
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
  const rect = circleRef.current?.getBoundingClientRect()
  if (!rect) return

  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const dx = e.clientX - centerX
  const dy = e.clientY - centerY

  const rad = Math.atan2(dy, dx)
  const deg = rad * (180 / Math.PI)

  setAngle(deg + 90)
}

  return (
    <div className="flex mt-40 pb-20 justify-center items-center">
      <div
        ref={circleRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setAngle(0)}
        className="size-[600px] border border-gray-100/50 rounded-full relative"
      >
        <div className="absolute w-full h-full rounded-full top-1/2 left-1/2 -translate-1/2 bg-radial from-0% from-gray-100/40 via-40% via-gray-100/30 to-black" />
        <img
          src={Pointer}
          className="absolute top-1/2 left-1/2 -translate-1/2 brightness-90"
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: "50% 50%",
            transition: "all",
          }}
        />
        {mottos.map((motto, index) => {
          const angle = (360 / mottos.length) * index;
          const radius = 270;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={motto.id}
              className="absolute text-start w-40"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: motto.transform,
              }}
            >
              <h4 className="text-2xl text-nowrap font-medium">{motto.title}</h4>
              <p className="text-nowrap">{motto.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Approach;

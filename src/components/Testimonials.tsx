import HappyPineapple from "@/assets/images/happy_pineapple.svg";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "CA Aditya Goenka",
    role: "Cofounder",
    company: "Console Gaming",
    message:
      "Before partnering with Unsquare, we at Console Gaming were juggling multiple softwares for our card processing and billing. Unsquare developed a comprehensive, integrated mobile application and billing software that has streamlined our daily operations at both staff and owner levels...",
  },
  {
    name: "Sayyam Khurmi",
    role: "Founder",
    company: "Against Odds",
    message:
      "Unsquare delivered an outstanding website for Against Odds, and a key part of that success was the expertise of Akshat. His technical insights and contributions were invaluable...",
  },
  {
    name: "Priya Mehta",
    role: "Founder",
    company: "Roaders",
    message:
      "Roaders launched with a significant advantage thanks to Unsquare. They developed dedicated mobile applications for both our drivers and our customers...",
  },
  {
    name: "Sayyam Khurmi",
    role: "Founder",
    company: "Against Odds",
    message:
      "Unsquare delivered an outstanding website for Against Odds, and a key part of that success was the expertise of Akshat. His technical insights and contributions were invaluable...",
  },
  {
    name: "Karan Melwani",
    role: "Founder and CEO",
    company: "Yahoom",
    message:
      "I wanted Yahoom to have a website that was fast and unique... Unsquare delivered a custom-built site that loads incredibly quickly...",
  },
];

function Testimonials() {
  return (
    <section className="w-full pt-8 relative py-18 text-gray-100 font-Teachers">
      <div className="flex gap-4 justify-between items-center px-8 sm:px-14 mb-18">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-0% from-gray-500/60 to-100% to-gray-100/50">
          Voices of Success from
          <br />
          Our Satisfied Clients
        </h1>
        <img src={HappyPineapple} className="brightness-75 w-36 md:w-56"/>
      </div>
      <div className="overflow-hidden w-full bg-gray-100/5 backdrop-blur-[2px]">
        <motion.div
          className="flex w-max gap-3"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </motion.div>
      </div>
      <div className="w-full z-10 h-1/4 bg-gradient-to-b from-black/0 to-black absolute bottom-0 left-0" />
    </section>
  );
}

type Testimonial = {
  name: string;
  role: string;
  company: string;
  message: string;
};

function TestimonialCard({ name, role, company, message }: Testimonial) {
  return (
    <div
      id="testimonials"
      className="shadow-lg rounded-xl py-6 px-10 w-[300px] shrink-0 flex flex-col justify-between"
    >
      <p className="text-gray-500 italic mb-4">"{message}"</p>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm sm:text-lg text-gray-400">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
export default Testimonials;

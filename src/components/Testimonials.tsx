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
    name: "Karan Melwani",
    role: "Founder and CEO",
    company: "Yahoom",
    message:
      "I wanted Yahoom to have a website that was fast and unique... Unsquare delivered a custom-built site that loads incredibly quickly...",
  },
];

function Testimonials() {
  return (
    <div className="w-full pt-8 relative my-18 text-gray-100 font-Teachers">
      <h1 className="text-6xl px-14 bg-clip-text text-transparent bg-gradient-to-r from-0% from-gray-500/60 to-100% to-gray-100/50 mb-18">
        Voices of Success from
        <br />
        Our Satisfied Clients
      </h1>
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
    </div>
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
    <div className="shadow-lg rounded-xl py-6 px-10 w-[300px] shrink-0 flex flex-col justify-between">
      <p className="text-gray-700 italic mb-4">"{message}"</p>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
export default Testimonials;

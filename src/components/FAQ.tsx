import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question:
      "How long does it typically take to develop a custom web or mobile application?",
    answer:
      "The timeline for development varies significantly based on the project’s complexity, features, and design requirements. A simple website might take a few weeks, while a complex mobile app or web platform could take several months.",
  },
  {
    question: "What platforms do you develop mobile applications for?",
    answer:
      "We develop native and cross-platform applications for both iOS and Android. Our expertise allows us to create apps optimized for each platform or a single codebase that works for both.",
  },
  {
    question: "Do you provide website and app maintenance after launch?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages to ensure your product stays secure, updated, and high-performing.",
  },
  {
    question:
      "Can you integrate my existing business systems with the new website or app?",
    answer:
      "Absolutely. We integrate CRMs, ERPs, payment gateways, and other business systems to create streamlined workflows.",
  },
  {
    question: "How do you ensure the security of my website or application?",
    answer:
      "We follow industry best practices including secure coding, regular audits, and strong encryption to protect your data.",
  },
  {
    question:
      "What is the cost of developing a custom website or mobile application?",
    answer:
      "Cost depends on complexity, features, and integrations. We'll provide a transparent quote after an initial consultation.",
  },
];

function FAQ() {
  return (
    <section
      id="faq"
      className="w-full px-14 py-8 relative text-gray-100 font-Teachers"
    >
      <div className="w-full z-10 h-1/4 bg-gradient-to-b to-black/0 from-black absolute top-0 left-0" />

      <h2 className="text-3xl md:text-4xl text-gray-100 font-Bricolage-Grotesque text-center mt-20 mb-8">
        <span className="text-gray-100/50">Your Burning</span>
        <br /> Questions Answered
      </h2>
      <div className="w-2/3 mx-auto py-4 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-[2px] cursor-pointer border-white/20 p-4 rounded-xl bg-gray-500/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-4 text-left"
      >
        <span className="text-white text-xl font-bricolage">{question}</span>
        <ChevronDown
          className={clsx(
            "text-white transition-transform duration-300",
            open && "rotate-180"
          )}
          size={20}
        />
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[200px] mt-2" : "max-h-0"
        )}
      >
        <p className="text-gray-300 font-teachers pt-4 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default FAQ;

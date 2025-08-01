import {
  Globe,
  Smartphone,
  ShoppingCart,
  MessageCircle,
  FileText,
  Brain,
} from "lucide-react";

const ProvidedServices = [
  {
    id: 1,
    title: "Website Development",
    icon: Globe,
    content:
      "Responsive, user-friendly websites tailored to your brand for seamless user experience and better results.",
  },
  {
    id: 2,
    title: "App Development",
    icon: Smartphone,
    content:
      "Custom mobile apps for iOS and Android to boost engagement and grow your business.",
  },
  {
    id: 3,
    title: "E-commerce Stores",
    icon: ShoppingCart,
    content:
      "Scalable online stores optimized for performance and smooth shopping experiences.",
  },
  {
    id: 4,
    title: "WhatsApp Automation",
    icon: MessageCircle,
    content:
      "Automated solutions to improve communication, support, and conversions via WhatsApp.",
  },
  {
    id: 5,
    title: "Custom Billing Software",
    icon: FileText,
    content:
      "Tailored billing solutions to automate invoicing, manage payments, and improve efficiency.",
  },
  {
    id: 6,
    title: "AI Projects",
    icon: Brain,
    content:
      "Developing AI-powered solutions to automate processes, and drive business growth.",
  },
];

function Services() {
  return (
    <div id="services" className="w-full px-14 pt-8 relative text-gray-100 font-Teachers">
      <div className="w-full z-10 h-1/4 bg-gradient-to-b to-black/0 from-black absolute top-0 left-0" />
      <h1 className="text-3xl sm:text-5xl lg:text-6xl z-20 text-center font-Bricolage-Grotesque mt-20">
        What We Do
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-14 px-8 py-4 md:p-18">
        {ProvidedServices.map((service) => (
          <li
            key={service.id}
            className="flex p-10 justify-center items-center gap-2 flex-col backdrop-blur-[2px] rounded-lg"
          >
            <service.icon className="w-10 h-10 text-blue-500/50 mt-1" />
            <div className="flex gap-2 items-center">
              <span className="text-gray-500 text-2xl">&#123;</span>
              <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-0% from-gray-500/80 to-100% to-gray-100/50 text-center text-xl text-nowrap font-medium">
                {service.title}
              </h4>
              <span className="text-gray-500 text-2xl">&#125;</span>
            </div>
            <p className="text-center max-w-[40ch] text-gray-400">
              {service.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;

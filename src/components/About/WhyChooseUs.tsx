const cardDetails = [
  {
    title: "Custom-Built Solutions",
    desc: "From size to pixel pitch, every display is tailored to your unique space and purpose.",
  },
  {
    title: "End-to-End Service",
    desc: "We handle everything from consultation, design, and supply to installation and after-sales support.",
  },
  {
    title: "Industry Standard Technology",
    desc: "Utilizing the latest in LED technology for superior brightness, resolution, and durability.",
  },
  {
    title: "Prompt Support & Maintenance",
    desc: "Dedicated technical support teams to ensure your displays stay flawless and impactful.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="flex items-center justify-center py-5">
      <div className="w-full rounded-[30px] drop-shadow-lg bg-gray-50 py-8 md:py-10 px-6 md:px-10">
        <h2 className="text-2xl md:text-4xl text-hero mb-6 md:mb-10 text-center md:text-left">
          Why Choose LED Display UAE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cardDetails.map((card, idx) => (
            <div
              key={idx}
              className="bg-[linear-gradient(180deg,_#001A49_0%,_#4845D2_100%)] p-5 rounded-2xl"
            >
              <h3 className="text-xl md:text-3xl text-white mb-4 md:mb-6 leading-snug lg:leading-[80px]">
                {card.title}
              </h3>
              <p className="text-base md:text-xl text-white">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

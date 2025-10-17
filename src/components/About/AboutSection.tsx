import Image from "next/image";
import React from "react";
// import TrustedPartners from "./Logo";

const AboutSection = () => {
  // const logos1 = [
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 1" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 2" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 3" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 4" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 5" },
  // ];
  // const logos2 = [
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 6" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 7" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 8" },
  //   { src: "/images/about-us/logo.png", alt: "Logoipsum 9" },
  // ];

  const aboutContent = [
    {
      content:
        "At LED Display UAE, we specialize in delivering cutting-edge LED display solutions designed to captivate, engage, and elevate your brand presence. From vibrant indoor displays to dynamic outdoor screens, our products are engineered for performance, clarity, and impact.",
    },
    {
      content:
        " With a focus on quality, innovation, and service excellence, we provide customized LED display systems tailored to meet diverse industry needs — whether for retail, events, corporate, entertainment, or public infrastructure.",
    },
  ];

  return (
    <section className="flex flex-col gap-5 pt-10">
      <h2 className="md:text-4xl text-2xl text-heading font-playfair">
        About LED Display UAE
      </h2>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 items-center">
        <div className="w-full h-full">
          <Image
            src={"/images/new-images/About Us Page- About us section.jpg"}
            alt="LED Display UAE"
            width={600}
            height={350}
            className="rounded-lg w-full h-auto"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-5 text-justify">
          <ul className="flex flex-col gap-5">
            {aboutContent.map((content, index) => (
              <li key={index} className="md:text-2xl font-light">
                {content.content}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trusted By Section */}
      {/* <div className="max-w-6xl mx-auto mt-3 text-center">
        <span className="text-xl sm:text-2xl md:text-3xl tracking-wide font-playfair">
          Trusted By
        </span>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {logos1.map((logo, index) => (
            <div
              key={index}
              className="h-8 sm:h-10 flex items-center mb-4 sm:mb-6"
            >
              <Image src={logo.src} alt={logo.alt} width={150} height={40} />
            </div>
          ))}

          {logos2.map((logo, index) => (
            <div
              key={index}
              className="h-8 sm:h-10 flex items-center mb-4 sm:mb-0 "
            >
              <Image src={logo.src} alt={logo.alt} width={150} height={40} />
            </div>
          ))}
        </div>
      </div> */}
      {/* <TrustedPartners /> */}
    </section>
  );
};

export default AboutSection;

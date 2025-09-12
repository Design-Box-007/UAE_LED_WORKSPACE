import images from "@/data/assets";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const logos1 = [
    { src: "/images/about-us/logo.png", alt: "Logoipsum 1" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 2" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 3" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 4" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 5" },
  ];
  const logos2 = [
    { src: "/images/about-us/logo.png", alt: "Logoipsum 6" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 7" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 8" },
    { src: "/images/about-us/logo.png", alt: "Logoipsum 9" },
  ];

  return (
    <section className="px-4 sm:px-10 lg:px-20 flex flex-col gap-8 lg:gap-13">
      <div>
        <div className="mx-auto rounded-lg flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
       
          <div className="w-full lg:w-1/2">
            <Image
              src={images.aboutUs.img1}
              alt="LED Display UAE"
              width={600}
              height={350}
              className="rounded-lg w-full h-auto"
            />
          </div>
          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-4 text-center lg:text-left mt-6 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              About LED Display UAE
            </h2>
            <p className="mb-3 lg:mb-4 text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              At LED Display UAE, we specialize in delivering cutting-edge LED
              display solutions designed to captivate, engage, and elevate your
              brand presence. From vibrant indoor displays to dynamic outdoor
              screens, our products are engineered for performance, clarity, and
              impact.
            </p>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              With a focus on quality, innovation, and service excellence, we
              provide customized LED display systems tailored to meet diverse
              industry needs — whether for retail, events, corporate,
              entertainment, or public infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="max-w-6xl mx-auto mt-3 text-center">
        <span className="text-xl sm:text-2xl md:text-3xl tracking-wide">
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
      </div>
    </section>
  );
};

export default AboutSection;

import AboutSection from "./AboutSection";
import Explore from "./Explore";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import CTA from "../UI/CTA";

const About = () => {
  return (
    <div className="px-5 md:px-10">
      <Hero
        image={"/images/new-images/About Us Landing Page.jpg"}
        title="Illuminating Ideas, Elevating Experiences"
        description="Your Trusted Partner for Next-Gen LED Display Solutions"
        position="top"
        overlay={true}
        titleColor="text-white"
        descColor="text-gray-200"
      />
      <AboutSection />
      <WhyChooseUs />
      <CTA
        title="Let’s Light Up Your Next Experience"
        description="From idea to installation, our team is ready to bring your LED vision to life — no matter the scale or scope."
        primaryButton={{ label: "Request a Quote", href: "/quote" }}
        className="px-0"
      />

      <Explore />
    </div>
  );
};
export default About;

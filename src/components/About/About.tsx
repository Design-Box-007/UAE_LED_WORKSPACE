import { tabsData } from "@/data/Display-solution/data";
import DisplaySolutions from "../UI/DisplaySolutions";
import AboutSection from "./AboutSection";
import Explore from "./Explore";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import CTA from "../UI/CTA";

const About = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <CTA
        title="Let’s Light Up Your Next Experience"
        description="From idea to installation, our team is ready to bring your LED vision to life — no matter the scale or scope."
        primaryButton={{ label: "Request a Quote", href: "/quote" }}
        secondaryButton={{
          label: " Contact Us Now",
          href: "/consultation",
        }}
      />
      <DisplaySolutions
        title="Let’s Light Up Your Next Experience"
        subtitle={
          <>
            Versatile LED Products Tailored for Every Space, <br />
            Purpose, and Performance Need
          </>
        }
        tabsData={tabsData}
      />
      <Explore />
    </div>
  );
};
export default About;

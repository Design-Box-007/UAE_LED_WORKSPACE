import { tabsData } from "@/data/Display-solution/data";
import DisplaySolutions from "../UI/DisplaySolutions";
import AboutSection from "./AboutSection";
import CTA from "./CTA";
import Explore from "./Explore";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <CTA />
      <DisplaySolutions
        title="Our Display Solutions"
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

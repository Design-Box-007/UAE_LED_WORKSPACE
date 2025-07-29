'use client'

import Hero from "./Hero"
import AboutSection from "./AboutSection"
import DisplaySolutions from "./DisplaySolutions"
import CTASection from "./CTASection"
import OurWork from "./OurWork"
import Testimonial from "./Testimonial"
import FinalCTA from "./FinalCTA"

const Home = () => {
    return (
        <main>
            <Hero />
            <AboutSection />
            <DisplaySolutions />
            <CTASection />
            <OurWork />
            <Testimonial />
            <FinalCTA />
        </main>
    )
}
export default Home
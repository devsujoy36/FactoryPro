import AboutUs from "../../Components/AboutUs/AboutUs"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import LatestBlog from "../../Components/LatestBlog/LatestBlog"
import OurClientSay from "../../Components/OurClientSay/OurClientSay"
import OurProcess from "../../Components/OurProcess/OurProcess"
import OurStory from "../../Components/OurStory/OurStory"
import OurWork from "../../Components/OurWork/OurWork"
import PricingPlan from "../../Components/PricingPlan/PricingPlan"
import Services from "../../Components/Servicess/Services"
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <Services />
            <OurStory />
            <WhatWeDo />
            <OurWork />
            <OurProcess />
            <PricingPlan />
            <OurClientSay />
            <LatestBlog />
            <Footer />
        </>
    )
}

export default Home
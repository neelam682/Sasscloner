import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ImageTextSection from "../components/ImageTextSection";
import ScreenshotGallery from "../components/ScreenshotGallery";
import MatrixSection from "../components/MatrixSection";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import PricingPlans from "../components/PricingPlans";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ComingSoonSection from "../components/ComingSoonSection";


const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Hero />
            <FeatureSection />
            <ImageTextSection />
            <ScreenshotGallery />
            <MatrixSection />
            <HowItWorks />
            <ComingSoonSection />
            <Testimonials />
            <PricingPlans />
            <FAQSection />
            <Footer />
        </div>
    );
};

export default Home;

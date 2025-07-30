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
        <div className="min-h-screen w-screen overflow-x-hidden bg-black text-white">
            <Navbar />
            <section id="hero">
                <Hero />
            </section>
            <section id="features">
                <FeatureSection />
            </section>
            <section id="image-text">
                <ImageTextSection />
            </section>
            <section id="screenshots">
                <ScreenshotGallery />
            </section>
            <section id="matrix">
                <MatrixSection />
            </section>
            <section id="how-it-works">
                <HowItWorks />
            </section>
            <section id="coming-soon">
                <ComingSoonSection />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="pricing">
                <PricingPlans />
            </section>
            <section id="faq">
                <FAQSection />
            </section>
            <Footer />
        </div>
    );
};

export default Home;


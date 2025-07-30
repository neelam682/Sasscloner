import React from "react";
import { FaLock, FaPaintBrush, FaChartBar, FaCreditCard, FaCogs, FaRocket } from "react-icons/fa";

const features = [
    {
        icon: <FaLock className="text-blue-500 text-3xl" />,
        title: "Full Auth System",
        description: "Sign up, login, password reset — all built using Firebase/Auth.js and ready to go.",
    },
    {
        icon: <FaPaintBrush className="text-blue-500 text-3xl" />,
        title: "Tailwind UI Kit",
        description: "Pre-built components and layouts so you don’t waste time on design or responsiveness.",
    },
    {
        icon: <FaChartBar className="text-blue-500 text-3xl" />,
        title: "Dashboard Layout",
        description: "Modern sidebar, navbar, cards, dark mode — designed to scale with your app.",
    },
    {
        icon: <FaCreditCard className="text-blue-500 text-3xl" />,
        title: "Stripe Subscriptions",
        description: "Built-in pricing plans and Stripe integration — just plug in your keys and launch.",
    },
    {
        icon: <FaCogs className="text-blue-500 text-3xl" />,
        title: "Modular File Structure",
        description: "Clean React + Vite codebase you can actually understand and expand easily.",
    },
    {
        icon: <FaRocket className="text-blue-500 text-3xl" />,
        title: "Instant Deploy Ready",
        description: "Push to GitHub and deploy to Vercel, Firebase, or Netlify in minutes.",
    },
];

const FeatureSection = () => {
    return (
        <section className="bg-black py-10 px-6 sm:px-10" id="features">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Everything You Need. Nothing You Don’t.
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12">
                    SaaSCloner gives you a complete SaaS foundation — clean UI, working auth, Stripe, and more — so you can launch faster.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-black  rounded-1xl p-6  text-left border border-white/10 shadow-inner bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_#3b82f6] hover:drop-shadow-[0_0_25px_#60a5fa] cursor-pointer"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;


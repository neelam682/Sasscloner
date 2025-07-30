// components/HowItWorks.tsx
import React from "react";

export default function HowItWorks() {
    const steps = [
        {
            title: "Pick a SaaS Template",
            desc: "Choose from dashboards, billing pages, and login flows.",
        },
        {
            title: "Customize & Export",
            desc: "Edit UI blocks, tweak Tailwind, and export clean React code.",
        },
        {
            title: "Clone in Seconds",
            desc: "Use your clone in any app — production ready.",
        },
    ];

    return (
        <section className="bg-black text-white py-20 px-6" id="how-it-works">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-blue-400">How SaaSCloner Works</h2>
                <p className="mb-10 text-gray-400">From zero to clone in 3 steps</p>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-[#0b0b0b] border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition">
                            <div className="text-5xl font-bold text-blue-500 mb-4">{i + 1}</div>
                            <h3 className="text-2xl font-semibold text-blue-300">{step.title}</h3>
                            <p className="mt-3 text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

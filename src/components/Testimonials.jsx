// components/Testimonials.tsx
import React from "react";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Lina Q.",
            text: "SaaSCloner helped me build a full dashboard UI in hours. Unreal!",
        },
        {
            name: "Dev Karim",
            text: "I’ve cloned 4 real SaaS apps. It’s like having a design team in your laptop.",
        },
        {
            name: "Sarah T.",
            text: "No more Figma-to-code pain. This is the fastest UI tool I’ve used.",
        },
    ];

    return (
        <section className="bg-black text-white py-20 px-6" id="testimonials">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-blue-400">What Users Say</h2>
                <p className="mb-12 text-gray-400">Real feedback from real builders</p>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-[#0a0a0a] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 transition duration-300">
                            <p className="text-gray-300 italic">"{t.text}"</p>
                            <p className="mt-4 text-blue-300 font-semibold">– {t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

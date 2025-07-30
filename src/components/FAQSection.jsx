import { useState } from "react";

const faqs = [
    {
        question: "What is SaaSCloner?",
        answer: "SaaSCloner helps you replicate high-performing SaaS interfaces with ease — no coding required.",
    },
    {
        question: "Do I need to know how to code?",
        answer: "No. SaaSCloner is designed for both developers and non-developers with intuitive UI controls.",
    },
    {
        question: "Can I export or host the designs?",
        answer: "Yes, you can export your generated interfaces or host them directly with a single click.",
    },
    {
        question: "Is there a free trial?",
        answer: "Yes. You can try 3 interfaces for free. After that, upgrade to unlock unlimited power.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null); // ← FIX: removed `: number | null`

    return (
        <section className="bg-[#05071A] py-20 px-6 text-white" id="faq">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-blue-600 rounded-xl transition-all duration-300 bg-[#0b0f2a] shadow-md"
                        >
                            <button
                                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-semibold text-white">
                                    {faq.question}
                                </span>
                                <span className="text-blue-400 text-2xl transition-transform duration-300">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 text-gray-300 transition-all duration-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

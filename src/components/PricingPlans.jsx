export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            features: [
                "3 SaaS Clones Included",
                "Basic UI Components",
                "Export HTML/CSS",
                "Community Support",
            ],
            cta: "Start Free",
            highlight: false,
        },
        {
            name: "Pro",
            price: "$9/mo",
            features: [
                "Unlimited SaaS Clones",
                "AI-powered UI Assistant",
                "Export React/Next.js Code",
                "Priority Support",
            ],
            cta: "Upgrade to Pro",
            highlight: true,
        },
        {
            name: "Agency",
            price: "$29/mo",
            features: [
                "All Pro Features",
                "Team Collaboration",
                "White-label Exports",
                "Dedicated Onboarding",
            ],
            cta: "Go Agency",
            highlight: false,
        },
    ];

    return (
        <section className="bg-[#05071A] text-white py-20 px-6" id="pricing">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-400 mb-4">Pricing Plans</h2>
                <p className="text-gray-400 mb-12">
                    Start free. Upgrade anytime. All plans include access to our full clone builder.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 border ${plan.highlight
                                    ? "border-blue-500 bg-[#0f1736] shadow-lg scale-105"
                                    : "border-gray-700 bg-[#0a0f27]"
                                } transition-all duration-300`}
                        >
                            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                            <p className="text-3xl font-bold text-blue-400 mb-4">
                                {plan.price}
                            </p>
                            <ul className="text-left space-y-2 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-blue-400">✓</span>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-2 px-4 rounded-lg font-medium ${plan.highlight
                                        ? "bg-blue-500 text-white hover:bg-blue-600"
                                        : "bg-gray-700 text-white hover:bg-gray-600"
                                    } transition`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

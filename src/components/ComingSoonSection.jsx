import { useState } from "react";

export default function ComingSoonSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            // Here you could also send to Firebase or API
            setSubmitted(true);
            setEmail("");
        }
    };

    return (
        <section className="w-full bg-[#05071A] py-16 px-4 text-white text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                    🚀 SaaSCloner is not live yet!
                </h2>
                <p className="text-gray-300 mb-6">
                    Be the first to get early access and exclusive updates. Drop your email below.
                </p>
                {submitted ? (
                    <div className="text-green-400 text-lg font-semibold">
                        🎉 Thanks! You’re on the list.
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full sm:w-2/3 px-4 py-3 rounded-xl bg-black border border-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                        >
                            Notify Me
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

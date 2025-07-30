export default function ImageTextSection() {
    return (
        <section className="relative bg-black px-3 sm:px-6 py-8 sm:py-12 flex flex-col items-center justify-center overflow-hidden">
            {/* Starry animated background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="w-full h-full animate-stars opacity-40"></div>
            </div>

            <div className="relative z-10 w-[550px] max-w-4xl">
                {/* Background Image */}
                <img
                    src="./image.jpg"
                    alt="SaaSCloner preview"
                    className="rounded-xl shadow-xl w-full h-[800px] object-cover"
                />

                {/* Overlay Container */}
                <div
                    className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-white
                        bg-black/60
                        rounded-xl
                        p-4 sm:p-6
                        z-20
                        text-center
                        max-w-sm mx-auto
                    "
                >
                    <h1 className="text-2xl sm:text-5xl font-extrabold mb-3 leading-tight">
                        Launch your SaaS faster than ever.
                    </h1>
                    <p className="text-xs sm:text-base text-gray-300">
                        Built with modern tools and ready to customize, SaaSCloner gets your app live in no time.
                    </p>
                </div>
            </div>
        </section>
    );
}





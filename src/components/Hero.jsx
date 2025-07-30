import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="relative w-screen min-h-screen bg-black overflow-hidden flex flex-col items-center justify-start px-4 pt-24 pb-32">


      {/* Background Glowing Blob */}
      <div className="absolute w-[600px] h-[600px] bg-black blur-3xl rounded-full z-0" />

      {/* Text above video */}
      <div className="relative z-10 text-center text-white mb-4 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 drop-shadow-lg">
          SaaS Cloner
        </h1>
        <p className="text-lg md:text-2xl text-blue-100 mb-6 drop-shadow">
          SaaSCloner is a plug-and-play boilerplate with everything you need — user auth, responsive UI, dashboard, payments, and more. Perfect for indie hackers, startups, and rapid MVPs.
        </p>
        <div className="inline-block bg-black border border-blue-400 text-sm text-blue-300 px-4 py-1 rounded-full shadow shadow-blue-400/30 backdrop-blur-sm">
          The Fastest Way to Launch Your SaaS
        </div>
      </div>

      {/* Centered Video at Natural Size */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="relative z-0 w-[700px] max-w-full h-auto rounded-xl opacity-60"
        src="/blackhole.mp4"
      />
    </div>
  );
};

export default Hero;





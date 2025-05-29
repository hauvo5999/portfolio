import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* <div className="relative inline-block mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold">
            HV
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
        </div> */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I&apos;m  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Hau Vo</span>
        </h1>
        <p className="text-3xl text-white/80 mb-8 max-w-2xl mx-auto">
          Software Engineer
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
            <Download size={20} />
            Download CV
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection
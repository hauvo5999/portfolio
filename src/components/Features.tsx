import { FacebookIcon } from "lucide-react";
import React from "react";

const Features: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {/* <span className="text-white text-2xl">💻</span> */}
                        <FacebookIcon/>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Software Development</h3>
                    <p className="text-white/70 mb-6">
                        I am knowledgeable about cutting-edge technology in addition to my principle software development skills. Together, we will create software that satisfies the requirements for availability, reliability, maintainability, security, and integrity.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Go</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">FastAPI</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">NestJS</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-white text-2xl">⚙️</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Backend Development</h3>
                    <p className="text-white/70 mb-6">
                        Building scalable server-side applications with Node.js, Express, and various database technologies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Express</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">MongoDB</span>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-white text-2xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">UI/UX Design</h3>
                    <p className="text-white/70 mb-6">
                        Designing intuitive user interfaces and seamless user experiences that drive engagement and conversions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Figma</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Adobe XD</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Sketch</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
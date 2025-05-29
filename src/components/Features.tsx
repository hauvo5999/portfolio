import { Building2Icon, MonitorSmartphone, TrendingUp } from "lucide-react";
import React from "react";

const Features: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">What I Do</h2>
            <div className="grid gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {/* <span className="text-white text-2xl">💻</span> */}
                        <MonitorSmartphone/>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Software Development</h3>
                    <p className="text-white/70 mb-6">
                        I am knowledgeable about cutting-edge technology in addition to my principle software development skills. Together, we will create software that satisfies the requirements for availability, reliability, maintainability, security, and integrity.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript / TypeScript</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">FastAPI</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">NestJS</span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Node.js</span>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Building2Icon />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">ERP (Enterprise Resource Planning)</h3>
                    <p className="text-white/70 mb-6">
                        With a proven track record of successfully implementing and managing ERP systems for diverse organizations including finance, supply chain, platform intergration, and human resources.
                    </p>
                    <p className="text-white/70 mb-6">
                        My ability to simplify corporate procedures and apply excellent analytical abilities have continuously increased operational effectiveness and optimized resource allocation. Working with me will ensure that ERP systems are seamlessly integrated with your current infrastructure, that projects are completed on time, and that budgetary restrictions are followed.          
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Odoo</span>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <TrendingUp />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Personal Portfolio</h3>
                    <p className="text-white/70 mb-6">
                        I engage in personal projects to learn, grow, and give back to the community in addition to my day-to-day duties.
                    </p>
                    {/* <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Figma</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Adobe XD</span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Sketch</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Features

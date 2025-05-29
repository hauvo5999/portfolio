import React from "react";

const Skills: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-white">Python</span>
                            <span className="text-white/60">95%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-white">JavaScript/TypeScript</span>
                            <span className="text-white/60">90%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-white">C/C++</span>
                            <span className="text-white/60">70%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-white">English</span>
                            <span className="text-white/60">60%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Databases</h3>
                <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">PostgresSQL</span>
                    <span className="text-white/60">90%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">MongoDB</span>
                    <span className="text-white/60">70%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">Redis</span>
                    <span className="text-white/60">70%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">MySQL</span>
                    <span className="text-white/60">50%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{width: '50%'}}></div>
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Soft Skills</h3>
                <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">Leadership</span>
                    <span className="text-white/60">88%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">Communication</span>
                    <span className="text-white/60">94%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">Problem Solving</span>
                    <span className="text-white/60">96%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                    <span className="text-white">Team Collaboration</span>
                    <span className="text-white/60">91%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-red-400 to-red-600 h-2 rounded-full" style={{width: '91%'}}></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
import React from "react";
import { Award, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Certificates & Awards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <Award className="text-yellow-400" size={32} />
              <div className="flex items-center text-white/60 mt-2 md:mt-0">
                <Calendar size={16} className="mr-2" />
                2022
              </div>
              {/* <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} /> */}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">TOEIC</h3>
            <p className="text-white/70 text-sm mb-3">Listening - Reading: <span className="text-blue-400">620/900</span></p>
            <p className="text-white/70 text-sm">Speaking - Writing: <span className="text-blue-400">240/400</span></p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <Award className="text-blue-400" size={32} />
              {/* <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} /> */}
              <div className="flex items-center text-white/60 mt-2 md:mt-0">
                <Calendar size={16} className="mr-2" />
                2020
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">VNG Code Tour x UNI</h3>
            <p className="text-white/60 text-sm mb-3">Algorithm competition</p>
            <p className="text-white/70 text-sm"><span className="text-blue-400">Top 50</span></p>
          </div>

          {/* <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <Award className="text-green-400" size={32} />
              <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">MongoDB Certified Developer</h3>
            <p className="text-white/60 text-sm mb-3">MongoDB Inc.</p>
            <p className="text-white/70 text-sm">Advanced database design and optimization techniques.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <Award className="text-purple-400" size={32} />
              <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">React Professional</h3>
            <p className="text-white/60 text-sm mb-3">Meta (Facebook)</p>
            <p className="text-white/70 text-sm">Advanced React patterns and performance optimization.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <Award className="text-red-400" size={32} />
              <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Certified Kubernetes Administrator</h3>
            <p className="text-white/60 text-sm mb-3">CNCF</p>
            <p className="text-white/70 text-sm">Container orchestration and cluster management expertise.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <Award className="text-orange-400" size={32} />
              <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Scrum Master Certified</h3>
            <p className="text-white/60 text-sm mb-3">Scrum Alliance</p>
            <p className="text-white/70 text-sm">Agile project management and team leadership skills.</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Certificates
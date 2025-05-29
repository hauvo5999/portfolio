
'use client'

import { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Award } from 'lucide-react';
import Image from "next/image";
import ContactIcon from '../components/IconLink';
import Education from '../components/Educations';
import Experiences from '../components/Experiences';
import Features from '../components/Features';
import Skills from '../components/Skills';

export default function Home() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">Hau Vo</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#resume" className="text-white/80 hover:text-white transition-colors">Resume</a>
              <a href="#certificates" className="text-white/80 hover:text-white transition-colors">Certificates</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Home Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2> */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I&apos;m  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Hau Vo</span>
              </h1>
              <h2 className="text-3xl text-white/80 mb-8 max-w-2xl mx-auto">
                Software Engineer
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Hi there, Greetings, I&apos;m Hau, a computer scientist with extensive experience in software development, system architecture, and ERP solutions.
                It&apos;s nice to have you here. I&apos;m excited to showcase my work and my areas of expertise, which include developing efficient software.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Now let&apos;s have a look at my portfolio to see how my skills and background might benefit your company. I appreciate you coming, and I hope to speak with you soon.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                <div className="text-center">
                  <ContactIcon iconType='linkedin' />
                </div>
                <div className="text-center">
                  <ContactIcon iconType='github' />
                </div>
                <div className="text-center">
                  <ContactIcon iconType='mail' />
                </div>
                <div className="text-center">
                  <ContactIcon iconType='facebook' />
                </div>
              </div>
            </div>
            <div className='rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8'>
              <Image src="/me.png" alt="me" width={500} height={500} className='rounded-lg' />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <Features />
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">My Resume</h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 border border-white/20">
              <div className="flex space-x-2">
                {['experience', 'skills', 'education'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'experience' && (<Experiences />)}

            {activeTab === 'education' && <Education />}

            {activeTab === 'skills' && (<Skills />)}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Certificates & Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <Award className="text-yellow-400" size={32} />
                <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AWS Certified Solutions Architect</h3>
              <p className="text-white/60 text-sm mb-3">Amazon Web Services</p>
              <p className="text-white/70 text-sm">Professional level certification for designing distributed applications on AWS.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <Award className="text-blue-400" size={32} />
                <ExternalLink className="text-white/40 group-hover:text-white/80 transition-colors" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Google Cloud Professional</h3>
              <p className="text-white/60 text-sm mb-3">Google Cloud Platform</p>
              <p className="text-white/70 text-sm">Cloud architecture and engineering best practices on GCP.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Work Together</h3>
                <p className="text-white/70 text-lg mb-8">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">voxuanhau1999@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+84 33 939-0851</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-white/70">Tan Binh, HCM</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <ContactIcon iconType='facebook' />
                <ContactIcon iconType='linkedin' />
                <ContactIcon iconType='github' />
                <ContactIcon iconType='instagram' />
                <ContactIcon iconType='mail' />

                {/* <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <GithubIcon className="text-white" size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Linkedin className="text-white" size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <X className="text-white" size={20} />
                </a> */}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 resize-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Hau Vo. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
import { Calendar, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Experiences: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Cloudverse */}
            <div>
                <span className="subtitle text-color-primary">Nov 2023 <MoveRight /> Now</span>
                <h4 className="maintitle maintitle-custom">
                    <a href="https://cloudverse.ai" target="_blank">Cloudverse Ltd</a>
                    <span><Image className="maintitle-image" src="/cloudverse-logo.png" alt="cloudverse-logo" width={40} height={40}/></span>
                </h4>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="mb-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <h2 className="maintitle">Backend Engineer</h2>
                            <p>Full-time</p>
                        </div>
                        <div className="flex items-center text-white/60 mt-2 md:mt-0">
                            <Calendar size={16} className="mr-2" />
                            Nov 2023 <MoveRight /> Now
                        </div>
                        </div>
                            <div className="text-white/70 mb-4 pl-4">
                            <ul>
                                <li>Designed and implemented the flow to integrate Cost and Usage Report from cloud providers (AWS, GCP, Azure)</li>
                                <li>Built new source code for the CSPM feature by FastAPI (Cloud Security Platform Management). Scanning cloud account (AWS, GCP, Azure) with security standards and recommending actions.</li>
                                <li>Implemented Cost Alert feature.</li>
                                <li>Code review for other members.</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python/FastAPI</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript/NestJs</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">GraphQL/REST API</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Prisma</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Redis</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">RabbitMQ</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Docker</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Microservices</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Event-Driven</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Novobi */}
            <div>
                <span className="subtitle text-color-primary">Jul 2021 <MoveRight /> Oct 2023</span>
                <h4 className="maintitle maintitle-custom">
                    <a href="https://novobi.com" target="_blank">Novobi Inc</a>
                    <span><Image className="maintitle-image" src="/novobi.webp" alt="novobi" width={40} height={40}/></span>
                </h4>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="mb-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <h2 className="maintitle">Software Engineer II / Consultant</h2>
                            <p>Full-time</p>
                            <p>Developer / Leader</p>
                        </div>
                        <div className="flex items-center text-white/60 mt-2 md:mt-0">
                            <Calendar size={16} className="mr-2" />
                            Apr 2022 <MoveRight /> Oct 2023
                        </div>
                        </div>
                            <div className="text-white/70 mb-4 pl-4">
                            <ul>
                                <li>Developed a strategy ERP plan for Sale company to manage their process and integrate to multiple E-commerce platforms</li>
                                <li>Led three entry-level members, ensuring solutions aligned with client expectations and delivering high-quality code.</li>
                                <li>Business analysis, training, and support customer.</li>
                                <li>Designed ERP solutions, deliver them, and assign them to other members.</li>
                                <li>Integrated with B2C platforms such as Square, Shopify, and Faire.com into internal ERP for management and tracking company performance.</li>
                                <li>Code review for members.</li>
                                <li>Learning and sharing of technical skill development through Technical Case Studies (internal course).</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Business Analysis</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Odoo EE 16</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">OWL</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Redis</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Pydantic</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Docker</span>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <h3 className="maintitle">Software Engineer I</h3>
                            <p>Full-time</p>
                            <p className="text-blue-400">Developer</p>
                        </div>
                        <div className="flex items-center text-white/60 mt-2 md:mt-0">
                            <Calendar size={16} className="mr-2" />
                            Jul 2021 <MoveRight />  Apr 2022
                        </div>
                        </div>
                            <div className="text-white/70 mb-4 pl-4">
                            <ul>
                                <li>Integrated with Payment Gateways: Stripe, ACH.</li>
                                <li>Built a re-publishing system to integrate with larger vendors. Implement an ETL process to daily sync large data from third-party via APIs, FTP pools.</li>
                                <li>Studied the fundamentals of the ERP system.</li>
                                <li>Learned how to work in the Agile/Scrum process.</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Odoo EE 15</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Pandas</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">PostgreSQL</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Redis</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Docker</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">N-layers architecture</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Git</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Linux</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Jira</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Confluence</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Postman</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Di Central */}
            <div>
                <span className="subtitle text-color-primary">Jul 2020 <MoveRight /> Oct 2020</span>
                <h4 className="maintitle maintitle-custom">
                    <a href="https://www.truecommerce.com/dicentral" target="_blank">Di Central</a>
                    <span><Image className="maintitle-image" src="/dicentral-logo.webp" alt="dicentral-logo" width={40} height={40}/></span>
                </h4>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="mb-5">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <h2 className="maintitle">Software Engineer Intern</h2>
                            <p>Full-time</p>
                            <p>Developer</p>
                        </div>
                        <div className="flex items-center text-white/60 mt-2 md:mt-0">
                            <Calendar size={16} className="mr-2" />
                            Jul 2020 <MoveRight /> Oct 2020
                        </div>
                        </div>
                            <div className="text-white/70 mb-4 pl-4">
                            <ul>
                                <li>Join automation test project in 4 months.</li>
                                <li>Maintain existing automation test system.</li>
                                <li>Implement a new feature with text comparison visualization.</li>
                                <li>Research about C#, .NET, Javascript, frontend, OOP, Git, N-layers architecture, ...</li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">C# / ASP.Net</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">JavaScript/JQuery</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">HTML / CSS / Bootstrap</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">SQL Server / T-SQL</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">RESTful API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences
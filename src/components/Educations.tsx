import { Calendar } from "lucide-react";
import React from "react";

const EducationCard: React.FC<{data: { major: string, school: string, timeInfo: string, content: string[], tags: string[] }}> = (props) => {
    const { major, school, timeInfo, content, tags } = props.data
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
                <h3 className="text-xl font-bold text-white">{major}</h3>
                <p className="text-blue-400">{school}</p>
            </div>
            <div className="flex items-center text-white/60 mt-2 md:mt-0">
                <Calendar size={16} className="mr-2" />
                {timeInfo}
            </div>
            </div>
            <div className="text-white/70 mb-4 pl-4">
                <ul>
                {content.map( (c, index) =>
                    (<li key={index}>{c}</li>)
                )}
                </ul>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{t}</span>
                ))}
            </div>
        </div>
    )
}


const Education: React.FC = () => {
    const data = [
        {
            id: 1,
            major: 'Master of Computer Science',
            school: 'Ho Chi Minh University of Technology',
            content: ['GPA: 3.4/4.0'],
            timeInfo: '2023 - Now',
            tags: ['Data Science', 'Machine Learning', 'Data Engineering']
        },
        {
            id: 2,
            major: 'Bachelor Degree of Computer Science',
            school: 'Ho Chi Minh University of Technology',
            content: [
                'GPA: 3.4/4.0',
                'Learning background knowledge in the fields of Computer and Information Technology, core knowledge of Computer Science, and specialized knowledge and technology of the industry and practice by working in groups on projects and exercises throughout the learning process.',
                'Thesis: Build Student Service Gate for Faculty of Computer Science and Engineering using ReactJS, NodeJS, Postgres and MongoDB (9.36/10)'
            ],
            timeInfo: '2017 - 2021',
            tags: ['Data structures and algorithms (DSA)', 'Principle of Programming Language', 'Python', 'Network architecture']
        },
        {
            id: 3,
            major: 'Student',
            school: 'Le Quy Don High School for the Gifted - Ninh Thuan',
            content: ['Maths 2nd award at the provincial level'],
            timeInfo: '2014 - 2017',
            tags: []
        },
    ]
    return (
        <div className="space-y-8">
            {
                data.map((e) => (
                <EducationCard key={e.id} data={e}/>))
            }
            {/* <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white">Master of Computer Science</h3>
                    <p className="text-blue-400">Ho Chi Minh University of Technology</p>
                </div>
                <div className="flex items-center text-white/60 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    2014 - 2018
                </div>
                </div>
                <p className="text-white/70 mb-4">
                Graduated Magna Cum Laude with focus on Web Technologies and Database Systems.
                </p>
                <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Software Engineering</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Databases</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Web Dev</span>
                </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white">Bachelor of Software Engineering</h3>
                    <p className="text-blue-400">UC Berkeley</p>
                </div>
                <div className="flex items-center text-white/60 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    2014 - 2018
                </div>
                </div>
                <p className="text-white/70 mb-4">
                Graduated Magna Cum Laude with focus on Web Technologies and Database Systems.
                </p>
                <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Software Engineering</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Databases</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Web Dev</span>
                </div>
            </div> */}
        </div>
    )
}

export default Education
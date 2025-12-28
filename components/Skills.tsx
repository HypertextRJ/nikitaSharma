import { skillsData } from '@/data/skills';

export default function Skills() {
    // Split skills into two groups for 2-column layout
    const leftColumn = skillsData.slice(0, 2);
    const rightColumn = skillsData.slice(2, 4);

    return (
        <section id="skills" className="py-20 bg-slate-800 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                        Expertise
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Proficient in modern data analytics tools and methodologies
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="grid grid-rows-2 gap-8">
                        {leftColumn.map((category, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 hover:border-blue-500/50 transition-all group flex flex-col"
                            >
                                <div className="flex items-center mb-6 flex-shrink-0">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                        <span className="text-xl sm:text-2xl">
                                            {index === 0 ? '💻' : '📊'}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="space-y-4 flex-grow min-h-0 overflow-y-auto">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="group/skill">
                                            <div className="flex items-start mb-2">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover/skill:scale-150 transition-transform flex-shrink-0"></div>
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-white mb-1 group-hover/skill:text-blue-400 transition-colors">
                                                        {skill.name}
                                                    </h4>
                                                    <p className="text-sm text-slate-400">
                                                        {skill.details}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-rows-2 gap-8">
                        {rightColumn.map((category, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 sm:p-8 hover:border-blue-500/50 transition-all group flex flex-col"
                            >
                                <div className="flex items-center mb-6 flex-shrink-0">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                                        <span className="text-xl sm:text-2xl">
                                            {index === 0 ? '📈' : '🛠️'}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {category.category}
                                    </h3>
                                </div>
                                <div className="space-y-4 flex-grow min-h-0 overflow-y-auto">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="group/skill">
                                            <div className="flex items-start mb-2">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 group-hover/skill:scale-150 transition-transform flex-shrink-0"></div>
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-white mb-1 group-hover/skill:text-purple-400 transition-colors">
                                                        {skill.name}
                                                    </h4>
                                                    <p className="text-sm text-slate-400">
                                                        {skill.details}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-800 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                        About Me
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-4">Data-Driven Problem Solver</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
                    {/* Image Side */}
                    <div className="order-1 lg:order-1">
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
                                <img
                                    src="/about.png"
                                    alt="Nikita Sharma - Data Analytics"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full hidden items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <div className="text-8xl mb-4">📊</div>
                                        <p className="text-xl font-semibold">Data Analytics</p>
                                        <p className="text-lg mt-2">Turning Insights into Action</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-2xl -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600/20 rounded-2xl -z-10"></div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-2 lg:order-2 space-y-4 sm:space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
                        <p>
                            I'm a Data Analyst pursuing a Post Graduate Diploma in Statistics with a strong
                            foundation in Chemistry from the University of Delhi. My analytical training,
                            combined with hands-on experience in Python and SQL, enables me to extract
                            meaningful insights from complex datasets and translate them into actionable
                            business recommendations.
                        </p>

                        <p>
                            I specialize in predictive modeling, business intelligence, and statistical
                            hypothesis testing. Through virtual experiences with Deloitte and TATA, I've
                            developed practical skills in data extraction, stakeholder communication, and
                            translating business requirements into analytical solutions. My work focuses on
                            delivering insights that drive data-backed decision-making.
                        </p>

                        <p>
                            I'm actively seeking Data Analyst or Business Analyst roles where I can apply
                            my statistical knowledge, machine learning skills, and business acumen to help
                            organizations optimize operations and make informed, data-driven decisions.
                        </p>

                        {/* Key Strengths */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center space-x-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                <div className="text-2xl">📊</div>
                                <div>
                                    <h4 className="font-semibold text-white">Statistical Foundation</h4>
                                    <p className="text-sm text-slate-400">PG Diploma in Statistics</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                <div className="text-2xl">🎯</div>
                                <div>
                                    <h4 className="font-semibold text-white">Business-Focused</h4>
                                    <p className="text-sm text-slate-400">Actionable insights</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">
                        <span className="mr-3">🎓</span>
                        Education
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all">
                            <div className="flex items-start">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                                    <span className="text-3xl">📊</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        Post Graduate Diploma in Statistics
                                    </h4>
                                    <p className="text-slate-400 mb-1">Data Science Specialization</p>
                                    <p className="text-slate-500 text-sm">Expected 2026</p>
                                    <p className="text-slate-400 text-sm mt-3">
                                        Focus: Statistical Modeling, Machine Learning, Operations Research, Econometrics
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                            <div className="flex items-start">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                                    <span className="text-3xl">🔬</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        B.Sc (Honours) — Chemistry
                                    </h4>
                                    <p className="text-slate-400 mb-1">University of Delhi</p>
                                    <p className="text-slate-500 text-sm">Graduated</p>
                                    <p className="text-slate-400 text-sm mt-3">
                                        Strong analytical and quantitative research methodology foundation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

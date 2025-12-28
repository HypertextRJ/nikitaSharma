'use client';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 pt-20 md:pt-24">
            <div className="max-w-4xl text-center">
                {/* Profile Image */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                                {/* Placeholder - replace with actual image */}
                                <img
                                    src="/about.png"
                                    alt="Nikita Sharma - Data Analyst"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full hidden items-center justify-center text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-500 to-purple-600">
                                    NS
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-slate-800"></div>
                    </div>
                </div>

                <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm md:text-base font-medium mb-4">
                        👋 Data Analyst
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Nikita Sharma
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-4">
                    Turning Data into Business Insights
                </p>

                {/* <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                    Statistics graduate specializing in predictive modeling, business intelligence,
                    and data visualization. Skilled at transforming complex data into actionable
                    insights using Python, SQL, and Power BI.
                </p> */}

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border-2 border-blue-600 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 border-t border-slate-700 pt-8">
                    <div>
                        <span className="block text-2xl font-bold text-blue-400">6</span>
                        <span>Projects</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold text-blue-400">81%</span>
                        <span>ML Accuracy</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold text-blue-400">4</span>
                        <span>Certifications</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

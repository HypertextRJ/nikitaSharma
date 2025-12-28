export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-slate-900 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        I'm actively seeking Data Analyst and Business Analyst opportunities where I can
                        contribute my analytical skills and drive data-backed strategies. Let's discuss how
                        I can add value to your team.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <div className="text-4xl mb-4">📧</div>
                        <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                        <a href="mailto:nikita.sharma.data@gmail.com" className="text-blue-400 hover:text-blue-300 text-sm break-all">
                            nikita.sharma.data@gmail.com
                        </a>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <div className="text-4xl mb-4">💼</div>
                        <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
                        <a
                            href="https://linkedin.com/in/nikitasharma-tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                            nikitasharma-tech
                        </a>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <div className="text-4xl mb-4">🐙</div>
                        <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
                        <a
                            href="https://github.com/nikitasharma-data27"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                            nikitasharma-data27
                        </a>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <div className="text-4xl mb-4">📍</div>
                        <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                        <p className="text-slate-400 text-sm">Delhi, India</p>
                    </div>
                </div>

                {/* Resume Download CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                        <span className="mr-3">📄</span>
                        Ready to Collaborate?
                    </h3>
                    <p className="text-blue-100 mb-6">
                        Download my resume for a complete overview of my projects, skills, and experience.
                        Open to Data Analyst and Business Analyst positions.
                    </p>
                    <a
                        href="/resume.pdf"
                        download="Nikita-Sharma-Data-Analyst-Resume.pdf"
                        className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        Download Resume (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
}

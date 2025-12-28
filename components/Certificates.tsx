'use client';

import { useState } from 'react';
import { certificates } from '@/data/certificates';
import type { Certificate } from '@/data/certificates';

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <>
            <section id="certificates" className="py-20 bg-slate-900 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                            Credentials
                        </span>
                        <h2 className="text-4xl font-bold text-white mb-4">Certificates & Experience</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Professional certifications and virtual experience programs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                onClick={() => setSelectedCert(cert)}
                                className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all cursor-pointer group flex flex-col"
                            >
                                {/* Certificate Image */}
                                <div className="relative h-48 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden flex-shrink-0">
                                    <img
                                        src={cert.imageUrl}
                                        alt={cert.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                                            if (sibling) sibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full hidden items-center justify-center text-6xl">
                                        📜
                                    </div>
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-semibold">Click to View</span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                                        {cert.name}
                                    </h3>

                                    <p className="text-slate-400 text-sm mb-1">
                                        {cert.organization}
                                    </p>

                                    <p className="text-slate-500 text-sm mb-4">
                                        {cert.date}
                                    </p>

                                    {cert.verifyLink && (
                                        <a
                                            href={cert.verifyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors mt-auto"
                                        >
                                            Verify →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedCert(null)}
                >
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute -top-12 right-0 text-white hover:text-blue-400 text-4xl font-light"
                        >
                            ×
                        </button>

                        {/* Certificate Image */}
                        <div className="bg-white rounded-lg overflow-hidden">
                            <img
                                src={selectedCert.imageUrl}
                                alt={selectedCert.name}
                                className="w-full h-auto"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (sibling) sibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-full h-96 hidden items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
                                <div className="text-center text-white">
                                    <div className="text-8xl mb-4">📜</div>
                                    <h3 className="text-2xl font-bold">{selectedCert.name}</h3>
                                    <p className="text-lg mt-2">{selectedCert.organization}</p>
                                </div>
                            </div>
                        </div>

                        {/* Certificate Info */}
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-white mb-1">{selectedCert.name}</h3>
                            <p className="text-slate-400">{selectedCert.organization} • {selectedCert.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

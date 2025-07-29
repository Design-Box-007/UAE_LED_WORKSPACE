"use client";

export default function FinalCTA() {
    return (
        <section className="relative w-full bg-white px-20 py-20">
            <div className="mx-auto max-w-[1320px]">
                {/* CTA Card */}
                <div className="rounded-3xl p-16" style={{ background: 'linear-gradient(180deg, #1F2964 0%, #3F53CA 100%)' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Main Heading */}
                        <div>
                            <h2 className="text-5xl font-medium text-white leading-tight">
                                Let's Light Up<br />
                                Your Next<br />
                                Experience
                            </h2>
                        </div>

                        {/* Right Column: Description Text and Buttons */}
                        <div className="flex flex-col">
                            <p className="text-white text-xl leading-relaxed mb-8">
                                From idea to installation, our team is ready to bring your LED vision to life — no matter the scale or scope.
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center gap-3 bg-white text-[#0f123f] px-11 py-4 rounded-2xl font-medium text-lg hover:bg-gray-50 transition-all duration-300 group">
                                    Request a Quote
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                
                                <button className="inline-flex items-center justify-center gap-3 bg-white text-[#0f123f] px-11 py-4 rounded-2xl font-medium text-lg hover:bg-gray-50 transition-all duration-300 group">
                                    Contact Us Now
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
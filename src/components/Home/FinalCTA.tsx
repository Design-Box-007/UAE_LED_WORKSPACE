"use client";

export default function FinalCTA() {
    return (
        <section className="relative w-full bg-white px-4 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-[1320px]">
                {/* CTA Card */}
                <div className="rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16" style={{ background: 'linear-gradient(180deg, #1F2964 0%, #3F53CA 100%)' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center text-center lg:text-left">
                        {/* Left Column: Main Heading */}
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                                Let’s Light Up<br className="hidden sm:block" />
                                Your Next<br className="hidden sm:block" />
                                Experience
                            </h2>
                        </div>

                        {/* Right Column: Description Text and Buttons */}
                        <div className="flex flex-col">
                            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                                From idea to installation, our team is ready to bring your LED vision to life — no matter the scale or scope.
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                <button className="inline-flex items-center justify-center gap-3 bg-white text-[#0f123f] px-6 md:px-8 lg:px-11 py-3 md:py-4 rounded-xl md:rounded-2xl font-medium text-base md:text-lg hover:bg-gray-50 transition-all duration-300 group">
                                    Request a Quote
                                    <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                
                                <button className="inline-flex items-center justify-center gap-3 bg-white text-[#0f123f] px-6 md:px-8 lg:px-11 py-3 md:py-4 rounded-xl md:rounded-2xl font-medium text-base md:text-lg hover:bg-gray-50 transition-all duration-300 group">
                                    <span className="hidden sm:inline">Contact Us Now</span>
                                    <span className="sm:hidden">Contact Us</span>
                                    <svg className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
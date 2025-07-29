"use client";

export default function CTASection() {
    return (
        <section className="relative w-full bg-white px-20 py-20">
            <div className="mx-auto max-w-[1320px]">
                {/* CTA Card */}
                <div className="rounded-3xl p-16" style={{ background: 'linear-gradient(180deg, #1F2964 0%, #3F53CA 100%)' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Main Heading */}
                        <div>
                            <h2 className="text-4xl font-medium text-white leading-tight">
                                Still Not Sure Which LED<br />
                                Display is Right for You?
                            </h2>
                        </div>

                        {/* Right Column: Description Text */}
                        <div>
                            <p className="text-white text-xl leading-relaxed mb-8">
                                Talk to our experts for personalized recommendations based on your event, space, and audience needs.
                            </p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-12">
                        <div className="flex-1">
                            <button className="w-full inline-flex items-center justify-between gap-3 bg-white text-[#0f123f] px-12 py-6 rounded-2xl font-medium text-2xl hover:bg-gray-50 transition-all duration-300 group">
                                <span>Request a Quote</span>
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1">
                            <button className="w-full inline-flex items-center justify-between gap-3 bg-white text-[#0f123f] px-12 py-6 rounded-2xl font-medium text-2xl hover:bg-gray-50 transition-all duration-300 group">
                                <span>Get a Free Consultation</span>
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
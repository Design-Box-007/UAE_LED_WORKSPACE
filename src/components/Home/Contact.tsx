"use client";

export default function Contact() {
    return (
        <section className="relative w-full bg-gray-50 px-4 md:px-8 lg:px-20 py-12 md:py-16 lg:py-20">
            <div className="mx-auto max-w-[1320px]">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-16 text-center lg:text-left">
                    {/* Left Column: Main Heading */}
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
                            Have a Project in<br className="hidden sm:block" />
                            Mind? Let’s Talk.
                        </h2>
                    </div>

                    {/* Right Column: Description and Connect Buttons */}
                    <div className="flex flex-col">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                            We’d love to hear about your event, installation, or idea. Fill out the 
                            form below or reach us directly — our team will respond within 24 hours.
                        </p>
                        
                        {/* Connect Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center lg:items-start">
                            <button className="inline-flex items-center gap-2 md:gap-3 bg-[#0f123f] text-white px-4 md:px-6 lg:px-13 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium text-sm md:text-base hover:bg-[#1a1f4f] transition-all duration-300">
                                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                                </svg>
                                <span className="hidden sm:inline">Connect Us Through</span>
                                <span className="sm:hidden">WhatsApp</span>
                            </button>
                            
                            <button className="inline-flex items-center gap-2 md:gap-3 bg-[#0f123f] text-white px-4 md:px-6 lg:px-13 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium text-sm md:text-base hover:bg-[#1a1f4f] transition-all duration-300">
                                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-20.728c-.904 0-1.636-.732-1.636-1.636v-13.909c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zm-1.636-1.636h-20.728l10.364 9.273 10.364-9.273zm0 1.636l-10.364 9.273-10.364-9.273v13.909h20.728v-13.909z"/>
                                </svg>
                                <span className="hidden sm:inline">Connect Us Through</span>
                                <span className="sm:hidden">Email</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-sm">
                    {/* Form Header */}
                    <div className="mb-6 md:mb-8 text-center lg:text-left">
                        <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2 md:mb-3">
                            Book a Free Consultation
                        </h3>
                        <p className="text-[#0f123f] text-base md:text-lg font-medium">
                             Reach out today and take the first step towards a unforgettable experience.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4 md:space-y-6">
                        {/* Row 1: Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0f123f] focus:outline-none focus:ring-0 text-base md:text-lg"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0f123f] focus:outline-none focus:ring-0 text-base md:text-lg"
                                />
                            </div>
                        </div>

                        {/* Row 2: Mobile No and Subject */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Mobile No"
                                    className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0f123f] focus:outline-none focus:ring-0 text-base md:text-lg"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0f123f] focus:outline-none focus:ring-0 text-base md:text-lg"
                                />
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div>
                            <textarea
                                placeholder="How can we help you?"
                                rows={4}
                                className="w-full px-0 py-3 md:py-4 text-gray-900 placeholder-gray-500 bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#0f123f] focus:outline-none focus:ring-0 text-base md:text-lg resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 md:pt-8">
                            <button
                                type="submit"
                                className="w-full bg-[#0f123f] text-white py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl font-medium text-base md:text-lg hover:bg-[#1a1f4f] transition-all duration-300"
                            >
                                Submit Information
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
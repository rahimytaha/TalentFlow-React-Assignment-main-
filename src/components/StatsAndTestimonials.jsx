// App.jsx (single-file preview)
import React from "react";

function Avatar({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow"
        />
    );
}

function Metric({ value, label }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-white">{value}</div>
            <div className="text-xs uppercase tracking-wide text-white/80 mt-1">{label}</div>
        </div>
    );
}

function TestimonialCard({ name, role, company, quote, src }) {
    return (
        <div className="rounded-2xl bg-slate-50 p-6 bg-slate-400">
            <div className="flex items-center gap-3">
                <Avatar src={src} alt={name} />
                <div>
                    <div className="font-semibold text-slate-900">{name}</div>
                    <div className="text-xs text-slate-500">{role}{company ? `, ${company}` : ""}</div>
                </div>
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">“{quote}”</p>
        </div>
    );
}

function LogosRow() {
    const brands = [
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    ];

    return (
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14 items-center max-w-5xl mx-auto">
            {brands.map((b) => (
                <div key={b.name} className="h-12 flex items-center justify-center">
                    <img src={b.logo} alt={b.name} className="max-h-6 object-contain" />
                </div>
            ))}
        </div>
    );
}

export default function StatsAndTestimonials() {
    return (
        <section id="testimonials" className="w-full">
            {/* Top gradient metrics bar */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 p-8">
                <div className="mx-auto max-w-6xl grid grid-cols-2 gap-8 sm:grid-cols-4 text-white">
                    <div className="min-h-[160px] flex items-center justify-center">
                        <Metric value="90%" label="Faster Hiring" />
                    </div>
                    <div className="min-h-[160px] flex items-center justify-center">
                        <Metric value="10K+" label="Jobs Posted" />
                    </div>
                    <div className="min-h-[160px] flex items-center justify-center">
                        <Metric value="95%" label="Customer Satisfaction" />
                    </div>
                    <div className="min-h-[160px] flex items-center justify-center">
                        <Metric value="5K+" label="Companies Trust Us" />
                    </div>
                </div>
            </div>


            {/* Testimonials */}
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
                <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Trusted by HR Teams Worldwide
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <TestimonialCard
                        name="Sarah Chen"
                        role="HR Director"
                        company="TechCorp"
                        src="https://i.pravatar.cc/150?img=47"
                        quote="TalentFLOW reduced our time-to-hire by 50%. The assessment feature helps us identify top talent before interviews."
                    />
                    <TestimonialCard
                        name="Mike Johnson"
                        role="Talent Acquisition"
                        company="StartupCo"
                        src="https://i.pravatar.cc/150?img=32"
                        quote="The candidate tracking system is intuitive. Our team collaboration improved dramatically since switching to TalentFLOW."
                    />
                    <TestimonialCard
                        name="Emily Rodriguez"
                        role="Recruiter"
                        company="GlobalTech"
                        src="https://i.pravatar.cc/150?img=12"
                        quote="Job management is effortless. I can create, edit, and organize positions in minutes instead of hours."
                    />
                </div>

                <h3 className="mt-16 text-center text-2xl font-bold text-slate-900">
                    Trusted by 5,000+ companies worldwide
                </h3>
                <LogosRow />
            </div>
        </section>
    );
}

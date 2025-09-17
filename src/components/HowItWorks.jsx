
import React from "react";
function NumberBadge({ num, className = "" }) {
    return (
        <div
            className={`h-10 w-10 shrink-0 rounded-full grid place-items-center text-white font-semibold shadow ${className}`}
            aria-hidden
        >
            {num}
        </div>
    );
}

export default function HowItWorks() {
    const steps = [
        {
            num: 1,
            title: "Create Jobs",
            text:
                "Set up job postings with our intuitive form builder and template library.",
            color: "bg-blue-600",
        },
        {
            num: 2,
            title: "Receive Applications",
            text:
                "Candidates apply through your branded portal with built-in assessment forms.",
            color: "bg-purple-600",
        },
        {
            num: 3,
            title: "Evaluate & Track",
            text:
                "Move candidates through stages and review assessment results in real-time.",
            color: "bg-green-600",
        },
        {
            num: 4,
            title: "Make Decisions",
            text:
                "Use data-driven insights to identify and hire the best candidates faster.",
            color: "bg-red-600",
        },
    ];

    return (
        <section id="how-it-works" className="w-full">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
                        Simple steps to transform your hiring process
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div key={step.num} className="text-center">
                                <div className="flex items-center justify-center">
                                    <NumberBadge num={step.num} className={step.color} />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-slate-900">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

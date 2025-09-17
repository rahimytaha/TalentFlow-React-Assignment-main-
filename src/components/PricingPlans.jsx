import React, { useState } from "react";
import { Briefcase, Users, ClipboardList, Check } from "lucide-react";

export default function PricingPlans() {
    const [billing, setBilling] = useState("monthly");

    const getPrice = (price) => {
        if (billing === "monthly") return `$${price}/month`;
        const annualPrice = price * 12
        return `$${annualPrice}/year`;
    };

    const plans = [
        {
            name: "Starter",
            price: 29,
            members: "Up to 5 team members",
            description: "Perfect for small teams getting started",
            features: {
                job: [
                    "5 active job postings",
                    "Basic job editing & archiving",
                    "Job posting templates",
                ],
                candidate: [
                    "100 candidates per month",
                    "3-stage pipeline",
                    "Basic candidate profiles",
                ],
                assessments: [],
            },
            button: "Start Free Trial",
            highlight: false,
        },
        {
            name: "Professional",
            price: 149,
            members: "Up to 15 team members",
            description: "Ideal for growing teams with advanced needs",
            features: {
                job: [
                    "25 active job postings",
                    "Advanced editing & reordering",
                    "Custom job templates",
                    "Multi-location posting",
                ],
                candidate: [
                    "500 candidates per month",
                    "Custom pipeline stages",
                    "Advanced candidate profiles",
                    "Automated workflows",
                ],
                assessments: [
                    "10 custom assessments",
                    "Basic analytics & scoring",
                    "Question templates",
                ],
            },
            button: "Start Free Trial",
            highlight: true,
        },
        {
            name: "Enterprise",
            price: 399,
            members: "Unlimited team members",
            description: "For large organizations with complex needs",
            features: {
                job: [
                    "Unlimited job postings",
                    "Advanced automation",
                    "Custom integrations",
                    "White-label options",
                ],
                candidate: [
                    "Unlimited candidates",
                    "Advanced analytics",
                    "AI-powered matching",
                    "Custom reporting",
                ],
                assessments: [
                    "Unlimited assessments",
                    "Advanced analytics",
                    "Video assessments",
                    "API access",
                ],
            },
            button: "Contact Sales",
            highlight: false,
            dark: true,
        },
    ];

    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-gray-900">
                    Choose your hiring plan
                </h2>
                <p className="mt-2 text-gray-600">
                    Streamline your recruitment process with powerful tools for job
                    management, candidate tracking, and assessments
                </p>

                {/* Billing toggle */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border p-1 bg-white shadow">
                    <button
                        onClick={() => setBilling("monthly")}
                        className={`px-4 py-1 text-sm font-medium rounded-full ${billing === "monthly"
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBilling("annual")}
                        className={`px-4 py-1 text-sm font-medium rounded-full ${billing === "annual"
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:text-gray-900"
                            }`}
                    >
                        Annual (Save 20%)
                    </button>
                </div>
            </div>

            {/* Pricing cards */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`relative rounded-2xl border p-6 shadow-sm flex flex-col justify-between w-full max-w-sm ${plan.dark ? "bg-gray-900 text-white border-gray-800" : "bg-white"
                            } ${plan.highlight ? "ring-2 ring-blue-600" : ""}`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/3 -translate-x-1/2">
                                <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <div>
                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                            <p className="mt-1 text-sm opacity-80">{plan.description}</p>
                            <p className="mt-4 text-3xl font-bold">{getPrice(plan.price)}</p>
                            <p className="text-sm mt-1">{plan.members}</p>

                            <div className="mt-6 space-y-4">
                                {/* Job Management */}
                                <div>
                                    <h4 className="flex items-center font-semibold">
                                        <Briefcase className="w-4 h-4 mr-2" /> Job Management
                                    </h4>
                                    <ul className="mt-2 space-y-1 text-sm">
                                        {plan.features.job.map((f, i) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="w-4 h-4 mr-2 text-green-500" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Candidate Management */}
                                <div>
                                    <h4 className="flex items-center font-semibold">
                                        <Users className="w-4 h-4 mr-2" /> Candidate Management
                                    </h4>
                                    <ul className="mt-2 space-y-1 text-sm">
                                        {plan.features.candidate.map((f, i) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="w-4 h-4 mr-2 text-green-500" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Assessments */}
                                <div>
                                    <h4 className="flex items-center font-semibold">
                                        <ClipboardList className="w-4 h-4 mr-2" /> Assessments
                                    </h4>
                                    {plan.features.assessments.length > 0 ? (
                                        <ul className="mt-2 space-y-1 text-sm">
                                            {plan.features.assessments.map((f, i) => (
                                                <li key={i} className="flex items-center">
                                                    <Check className="w-4 h-4 mr-2 text-green-500" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-2 text-sm opacity-70">
                                            No assessment features
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            className={`mt-6 w-full rounded-lg px-4 py-2 font-medium transition ${plan.dark
                                ? "bg-white text-gray-900 hover:bg-gray-200"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                        >
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function TalentFlowCTA() {
    return (
        <div className="bg-gradient-to-b from-white to-indigo-50 text-slate-900">
            {/* CTA Section */}
            <section id="pricing" className="mx-auto max-w-5xl px-6 py-20 text-center">
                <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold tracking-tight">
                    Ready to Transform Your Hiring?
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-gray-600">
                    Join thousands of HR teams who've streamlined their process with TalentFLOW.
                    Start your free trial today!
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <Link
                            to="/pricing"
                            className="rounded-xl px-8 py-4 text-sm font-semibold shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            to="/pricing"
                            className="rounded-xl px-8 py-4 text-sm font-semibold shadow-sm border border-slate-300 text-slate-900 bg-white hover:bg-slate-50"
                        >
                            View Plans
                        </Link>
                    </div>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                    14-day free trial • No setup fees • Cancel anytime
                </p>
            </section>
        </div>
    );
}

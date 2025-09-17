import React from "react";
import headerLogo from "../assets/images/header_logo.png";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const links = {
    product: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "API", href: "#" },
    ],
    company: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
    ],
    support: [
        { label: "Help Center", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Status", href: "#" },
        { label: "Privacy", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="grid gap-10 md:grid-cols-4 md:gap-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center">
                                <div className="flex h-9 w-9 items-center justify-center text-white shadow-sm">
                                    <img
                                        src={headerLogo}
                                        alt="TalentFlow Logo"
                                        className="h-7 w-7 object-contain"
                                    />
                                </div>
                            </span>
                            <span className="text-xl font-semibold">TalentFLOW</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">
                            The complete HR management platform for modern teams.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-4 flex items-center gap-3 text-gray-300">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500"
                            >
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-400 transition-colors"
                            >
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition-colors"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
                        <div>
                            <h3 className="text-sm font-semibold text-white">Product</h3>
                            <ul className="mt-4 space-y-3 text-sm text-gray-400">
                                {links.product.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="hover:text-white">
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white">Company</h3>
                            <ul className="mt-4 space-y-3 text-sm text-gray-400">
                                {links.company.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="hover:text-white">
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white">Support</h3>
                            <ul className="mt-4 space-y-3 text-sm text-gray-400">
                                {links.support.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href} className="hover:text-white">
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-10 border-t border-white/20 pt-6 text-xs text-gray-400 text-center">
                    © 2024 TalentFLOW. <br /> All rights reserved.
                </div>
            </div>
        </footer>
    );
}

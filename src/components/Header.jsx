import { Menu, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/images/header_logo.png";

export default function Header({ open, setOpen }) {
    return (
        <header className="sticky top-0 z-20 h-16 border-b border-slate-200 bg-white shadow-sm">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center text-white shadow-sm">
                            <img
                                src={headerLogo}
                                alt="TalentFlow Logo"
                                className="h-7 w-7 object-contain"
                            />
                        </div>
                        <span
                            className="font-poppins font-bold text-[25px] leading-[28px] tracking-normal"
                            style={{ color: "#9333EA" }}
                        >
                            TalentFLOW
                        </span>
                    </Link>
                </div>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-10 md:flex">
                    <a href="#features" className="text-sm font-medium text-gray-600 hover:!text-slate-900">
                        About Us
                    </a>
                    <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:!text-slate-900">
                        How it Works
                    </a>
                    <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:!text-slate-900">
                        Testimonials
                    </a>
                    <a href="#pricing" className="text-sm font-medium text-gray-600 hover:!text-slate-900">
                        Pricing
                    </a>
                </nav>

                {/* Desktop buttons */}
                <div className="hidden items-center gap-3 md:flex">
                    <button className="rounded-xl bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                        <Link to="/login">
                            Log In
                        </Link>
                    </button>
                    <button className="rounded-xl bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </button>
                </div>

                {/* Mobile menu */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Open menu"
                >
                    <Menu className="h-6 w-6 text-slate-700" />
                </button>
            </div>

            {/* Mobile nav */}
            {open && (
                <div className="border-t bg-white md:hidden">
                    <div className="mx-auto max-w-7xl px-4 py-3">
                        <div className="grid gap-3">
                            <Link to="/about" className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                                About Us
                            </Link>
                            <Link to="/how-it-works" className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                                How it Works
                            </Link>
                            <Link to="/testimonials" className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                                Testimonials
                            </Link>
                            <Link to="/pricing" className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>
                                Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

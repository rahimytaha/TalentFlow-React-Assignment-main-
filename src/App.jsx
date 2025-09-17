import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import StatsAndTestimonials from "./components/StatsAndTestimonials";
import TalentFlowCTA from "./components/TalentFlowCTA";
import PricingPage from "./components/Pricing/page.jsx";
import Footer from "./components/Footer";
import SignupPage from "./components/SignupPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import CreateJob from "./components/Dashboard/CreateJob.jsx";
import JobDetails from "./components/Dashboard/JobDetails.jsx";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div className="flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
            <Header open={open} setOpen={setOpen} />
            <main className="relative flex-1">
              <Hero />
              <Features />
              <FeaturesSection />
            </main>
            <HowItWorks />
            <StatsAndTestimonials />
            <TalentFlowCTA />
            <Footer />
          </div>
        }
      />
      <Route
        path="/signup"
        element={<SignupPage open={open} setOpen={setOpen} />}
      />
      <Route
        path="/login"
        element={<LoginPage open={open} setOpen={setOpen} />}
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/create-job" element={<CreateJob />} />
      <Route path="/edit-job/:id" element={<CreateJob mode="edit" />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
    </Routes>

  );
}

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "./NavBar";
import jobs from "../../mock/jobs";

export default function CreateJob({ mode = "create" }) {
    const navigate = useNavigate();

    const { id } = useParams();
    const [formData, setFormData] = useState({
        jobTitle: "",
        companyName: "",
        department: "",
        employmentType: "",
        experienceLevel: "",
        salaryMin: "",
        salaryMax: "",
        currency: "USD",
        workLocation: "office",
        officeLocation: "",
        jobSummary: "",
        responsibilities: "",
        qualifications: "",
        benefits: "",
        applicationDeadline: "",
        applyTalentFlow: true,
        applyByEmail: false,
        applyExternal: false,
        contactEmail: "",
        externalLink: "",
        skills: ["JavaScript", "React", "Node.js", "Other"],
    });


    const toggleApplyOption = (key) =>
        setFormData((p) => ({ ...p, [key]: !p[key] }));

    const [skillInput, setSkillInput] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleWorkLocation = (type) => {
        setFormData((prev) => ({ ...prev, workLocation: type }));
    };

    const addSkill = () => {
        if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, skillInput.trim()],
            }));
            setSkillInput("");
        }
    };

    const removeSkill = (skill) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s !== skill),
        }));
    };

    useEffect(() => {
        if (mode === "edit" && id) {
            const storedJobs = JSON.parse(localStorage.getItem("jobs")) || jobs;
            const jobToEdit = storedJobs.find((job) => job.id === Number(id));
            if (jobToEdit) {
                setFormData({
                    ...formData,
                    jobTitle: jobToEdit.title,
                    jobSummary: jobToEdit.desc,
                    officeLocation: jobToEdit.location === "Remote" ? "" : jobToEdit.location,
                    workLocation:
                        jobToEdit.location === "Remote"
                            ? "remote"
                            : jobToEdit.location === "—"
                                ? "office"
                                : "office",
                    skills: jobToEdit.tags,
                    // keep defaults for fields not stored in job
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, mode]);
    // 🔹 Build job object
    const buildJob = (status) => {
        const created = new Date().toLocaleDateString("en-GB");
        const location =
            formData.workLocation === "remote"
                ? "Remote"
                : formData.officeLocation?.trim() || "—";

        return {
            id: mode === "edit" && id ? Number(id) : Date.now(),
            title: formData.jobTitle?.trim() || "Untitled Role",
            desc: formData.jobSummary?.trim() || "",
            created,
            status,
            applicants: 0,
            tags: (formData.skills || []).filter((s) => s && s !== "Other"),
            location,
        };
    };

    const handleSaveDraft = () => {
        const draft = buildJob("draft");
        jobs.push(draft);
        saveJobs(jobs);
        navigate("/dashboard");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const published = buildJob("active");
        jobs.push(published);
        saveJobs(jobs);
        navigate("/dashboard");
    };

    const saveJobs = (updatedJobs) => {
        localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    };

    const officeDisabled = formData.workLocation === "remote";

    return (
        <div>
            <NavBar onSaveDraft={handleSaveDraft} />
            <div className="flex justify-center bg-gradient-to-b from-white to-purple-50">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-3xl px-4 py-8 space-y-6"
                >
                    {/* ----- Card 1: Basic Information ----- */}
                    <section className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                                ℹ️
                            </div>
                            <h2 className="text-lg font-semibold">Basic Information</h2>
                        </div>

                        {/* Job Title */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Job Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                placeholder="e.g. Senior Software Engineer"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                required
                            />
                        </div>

                        {/* Company Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Company Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Your company name"
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                required
                            />
                        </div>

                        {/* Department + Employment Type */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Department
                                </label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    <option value="">Select Department</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Sales">Sales</option>
                                    <option value="HR">HR</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Employment Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="employmentType"
                                    value={formData.employmentType}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    required
                                >
                                    <option value="">Select Type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                        </div>

                        {/* Experience + Salary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Experience Level <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="experienceLevel"
                                    value={formData.experienceLevel}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    required
                                >
                                    <option value="">Select Level</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Mid">Mid</option>
                                    <option value="Senior">Senior</option>
                                    <option value="Lead">Lead</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Salary Range
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        name="salaryMin"
                                        value={formData.salaryMin}
                                        onChange={handleChange}
                                        placeholder="Min"
                                        className="w-1/3 border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        name="salaryMax"
                                        value={formData.salaryMax}
                                        onChange={handleChange}
                                        placeholder="Max"
                                        className="w-1/3 border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    />
                                    <select
                                        name="currency"
                                        value={formData.currency}
                                        onChange={handleChange}
                                        className="border rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    >
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ----- Card 2: Location & Remote Work ----- */}
                    <section className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                📍
                            </div>
                            <h2 className="text-lg font-semibold">Location &amp; Remote Work</h2>
                        </div>

                        {/* Work Location */}
                        <div className="mb-4">
                            <p className="text-sm font-medium mb-2">
                                Work Location <span className="text-red-500">*</span>
                            </p>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={formData.workLocation === "office"}
                                        onChange={() => handleWorkLocation("office")}
                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
                                    />
                                    Office-based
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={formData.workLocation === "remote"}
                                        onChange={() => handleWorkLocation("remote")}
                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
                                    />
                                    Fully Remote
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={formData.workLocation === "hybrid"}
                                        onChange={() => handleWorkLocation("hybrid")}
                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
                                    />
                                    Hybrid
                                </label>
                            </div>
                        </div>

                        {/* Office Location */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Office Location
                            </label>
                            <input
                                type="text"
                                name="officeLocation"
                                value={formData.officeLocation}
                                onChange={handleChange}
                                placeholder="City, State/Country"
                                disabled={formData.workLocation === "remote"}
                                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${formData.workLocation === "remote"
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "focus:ring-blue-400"
                                    }`}
                            />
                            {formData.workLocation === "remote" && (
                                <p className="text-xs text-gray-500 mt-1">
                                    Disabled when “Fully Remote” is selected.
                                </p>
                            )}
                        </div>
                    </section>

                    <section className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                                📄
                            </div>
                            <h2 className="text-lg font-semibold">Job Description</h2>
                        </div>

                        {/* Job Summary */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Job Summary <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="jobSummary"
                                value={formData.jobSummary}
                                onChange={handleChange}
                                placeholder="Brief overview of the role and what the candidate will be doing..."
                                rows={5}
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        {/* Key Responsibilities */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Key Responsibilities
                            </label>
                            <textarea
                                name="responsibilities"
                                value={formData.responsibilities}
                                onChange={handleChange}
                                placeholder="• List key responsibilities&#10;• Use bullet points for clarity&#10;• Include main duties and tasks"
                                rows={5}
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        {/* Requirements & Qualifications */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Requirements &amp; Qualifications{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="qualifications"
                                value={formData.qualifications}
                                onChange={handleChange}
                                placeholder="• Required skills and experience&#10;• Education requirements&#10;• Technical skills&#10;• Soft skills"
                                rows={5}
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                required
                            />
                        </div>

                        {/* Benefits & Perks */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Benefits &amp; Perks
                            </label>
                            <textarea
                                name="benefits"
                                value={formData.benefits}
                                onChange={handleChange}
                                placeholder="• Health insurance&#10;• Flexible working hours&#10;• Professional development opportunities&#10;• Other benefits..."
                                rows={5}
                                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                    </section>

                    <section className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600">
                                ⚙️
                            </div>
                            <h2 className="text-lg font-semibold">Required Skills</h2>
                        </div>

                        {/* Add Skills */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Add Skills
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && (e.preventDefault(), addSkill())
                                    }
                                    placeholder="Type a skill and press Enter"
                                    className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <button
                                    type="button"
                                    onClick={addSkill}
                                    className="bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2">
                            {formData.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {skill}
                                    <button
                                        type="button"
                                        onClick={() => removeSkill(skill)}
                                        className="ml-1 text-blue-500 hover:text-blue-700"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white shadow-md rounded-2xl p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600">
                                🗂️
                            </div>
                            <h2 className="text-lg font-semibold">Application Settings</h2>
                        </div>

                        {/* Deadline */}
                        <div className="mb-4 max-w-xs">
                            <label className="block text-sm font-medium mb-1">
                                Application Deadline <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    name="applicationDeadline"
                                    value={formData.applicationDeadline}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    required
                                />
                                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                    📅
                                </span>
                            </div>
                        </div>

                        {/* How should candidates apply? */}
                        <div className="mb-3">
                            <p className="text-sm font-medium mb-2">
                                How should candidates apply?
                            </p>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={formData.applyTalentFlow}
                                        onChange={() => toggleApplyOption("applyTalentFlow")}
                                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-400"
                                    />
                                    Through TalentFLOW
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={formData.applyByEmail}
                                        onChange={() => toggleApplyOption("applyByEmail")}
                                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-400"
                                    />
                                    Send resume via email
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={formData.applyExternal}
                                        onChange={() => toggleApplyOption("applyExternal")}
                                        className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-400"
                                    />
                                    Redirect to external link
                                </label>
                            </div>
                        </div>

                        {/* Contact Email */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium mb-1">
                                Contact Email
                            </label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={formData.contactEmail}
                                onChange={handleChange}
                                placeholder="hr@company.com"
                                disabled={!formData.applyByEmail}
                                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${formData.applyByEmail
                                    ? "focus:ring-emerald-400"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    }`}
                            />
                        </div>

                        {/* External Link */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                External Link
                            </label>
                            <input
                                type="url"
                                name="externalLink"
                                value={formData.externalLink}
                                onChange={handleChange}
                                placeholder="www.mettle.com"
                                disabled={!formData.applyExternal}
                                className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 ${formData.applyExternal
                                    ? "focus:ring-emerald-400"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    }`}
                            />
                        </div>
                    </section>

                    {/* Submit */}
                    <div className="flex items-center justify-between pt-6">
                        {/* Cancel */}
                        <button
                            type="button"
                            onClick={() => navigate("/dashboard")}
                            className="flex items-center text-sm text-gray-600 hover:text-gray-800"
                        >
                            ← Cancel
                        </button>

                        <div className="flex items-center gap-3">
                            {/* Save as Draft */}
                            <button
                                type="button"
                                onClick={handleSaveDraft}
                                className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Save as Draft
                            </button>

                            {/* Publish Job */}
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                            >
                                <span>📤</span> {mode === "edit" ? "Update Job" : "Publish Job"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

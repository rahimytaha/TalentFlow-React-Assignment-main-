import { Briefcase, Users, ClipboardList } from "lucide-react";
import tick from "../assets/images/tick.png";


export default function Features() {
    return (
        <section id="features" className="mx-auto max-w-7xl px-4 py-20">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900">Everything You Need to Hire Better</h2>
                <p className="mt-3 max-w-2xl mx-auto text-gray-600">
                    Our comprehensive platform covers every aspect of the hiring process, from job creation to candidate onboarding.
                </p>
            </div>


            <div className="mt-12 flex justify-center">
                <div className="grid gap-8 md:grid-cols-3 text-center">
                    {/* Card 1 */}
                    <div className="rounded-2xl p-6 shadow-sm">
                        <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">Job Management</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Create, edit, and organize job postings with simplicity and ease. Archive old positions and reorder jobs based on priority.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-gray-600 flex flex-col items-center">
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Drag & drop reordering</li>
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Template library</li>
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Bulk actions</li>
                        </ul>
                    </div>


                    {/* Card 2 */}
                    <div className="rounded-2xl p-6 shadow-sm">
                        <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">Candidate Tracking</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Track candidates through customizable stages from application to hire. Automated workflows keep everyone informed.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-gray-600 flex flex-col items-center">
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Progress through stages</li>
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Automated notifications</li>
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Custom stages</li>
                        </ul>
                    </div>


                    {/* Card 3 */}
                    <div className="rounded-2xl p-6 shadow-sm">
                        <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                            <ClipboardList className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-800">Smart Assessments</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Create job-specific quizzes and assessments. Automated scoring and detailed analytics help identify top talent quickly.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-gray-600 flex flex-col items-center">
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Custom question types</li>
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Auto-scoring</li>
                            <li className="flex items-center"><img src={tick} alt="tick" className="w-4 h-4 mr-2" />Performance analytics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
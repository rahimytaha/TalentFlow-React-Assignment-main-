export default function FeaturesSection() {
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-indigo-600">
                    <path d="M4 7h16M6 7V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Job Management</h3>
            <p className="mt-2 text-sm text-slate-600">
                Create, edit, and organize job postings with simplicity and ease. Archive old positions and reorder jobs based on priority.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Drag & drop reordering</span></li>
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Template library</span></li>
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Bulk actions</span></li>
            </ul>
        </div>


        {/* Card 2 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-50">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-fuchsia-600">
                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 1 0-14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Candidate Tracking</h3>
            <p className="mt-2 text-sm text-slate-600">
                Track candidates through customizable stages from application to hire. Automated workflows keep everyone informed.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Progress through stages</span></li>
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Automated notifications</span></li>
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Custom stages</span></li>
            </ul>
        </div>


        {/* Card 3 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-600">
                    <path d="M9 12l2 2 4-5m4 3v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Smart Assessments</h3>
            <p className="mt-2 text-sm text-slate-600">
                Create job-specific quizzes and assessments. Automated scoring and detailed analytics help identify top talent quickly.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Custom question types</span></li>
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Auto-scoring</span></li>
                <li className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full bg-emerald-500" /><span>Performance analytics</span></li>
            </ul>
        </div>
    </div>
}
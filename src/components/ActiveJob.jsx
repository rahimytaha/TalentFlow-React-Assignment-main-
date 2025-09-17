const avatars = [
    "https://i.pravatar.cc/40?img=1",
    "https://i.pravatar.cc/40?img=2",
    "https://i.pravatar.cc/40?img=3",
    "https://i.pravatar.cc/40?img=4",
];


export default function ActiveJob({ title, applications, faces = 3 }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
            <div>
                <p className="text-sm font-semibold text-slate-800">{title}</p>
                <p className="text-xs text-gray-500">{applications} Applications</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                    {avatars.slice(0, faces).map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt="avatar"
                            className="h-6 w-6 rounded-full border-2 border-white object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export function Footer() {
    return (
        <footer className="bg-slate-50 py-12 border-t border-slate-200">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-[0.2em] text-slate-900">QERTEX</span>
                    <span className="text-sm text-slate-500">© 2025</span>
                </div>

                <div className="flex gap-8 text-sm text-slate-500">
                    <a href="#" className="hover:text-[var(--color-cobalt)] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[var(--color-cobalt)] transition-colors">Terms</a>
                    <a href="#" className="hover:text-[var(--color-cobalt)] transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}

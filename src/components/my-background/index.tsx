export function MyBackground({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full h-screen bg-slate-300 pt-20 pb-10 px-8">
            <div className="bg-black/40 w-full h-full rounded-xl">
                {children}
            </div>
        </section>
    )
}
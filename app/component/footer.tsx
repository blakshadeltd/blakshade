export default function Footer() {
    return (
        <section className="relative py-24 spacer text-[var(--foreground)] m-4">
            {/* Black section overlapping the top */}
            <div className="relative -top-[96px] h-[30px] bg-[var(--background)] rounded-b-[20px] shadow-xl" />

            <div className="container mx-auto flex">
                <div className="w-full justify-center text-center flex items-end z-0 h-[100vh]">
                    <h2 className="text-[24px] sm:text-[80px] font-normal leading-tight reveal-text">
                        WE DON&apos;T HAVE BOTTOM
                    </h2>
                </div>
            </div>
        </section>
    );
}

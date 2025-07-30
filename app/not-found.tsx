// pages/404.tsx

import Link from "next/link";

export default function Custom404() {
    return (
        <div className="rounded-[30px] mx-4 flex items-center gap-6 justify-center h-[500px] bg-gray-300 text-[var(--foreground)] text-center overflow-hidden lg:h-screen">
            <div className="container">
                <h1 className="font-normal italic mb-4 text-[80px] sm:text-[120px] lg:text-[150px]">404!</h1>
                <p className="font-nornal mb-12">
                    We're sorry, the page you were looking for doesn't exist or has moved elsewhere.
                </p>
                <Link
                    href="/"
                    className="px-6 py-3 rounded-[10px] font-normal shadow-md transition-all duration-500 ease-in-out bg-[var(--foreground)] text-[var(--background)] shine-effect hover:rounded-[15px] hover:bg-[var(--hover)]"
                >
                    Return to Home
                </Link>
            </div>
        </div>

    );
}

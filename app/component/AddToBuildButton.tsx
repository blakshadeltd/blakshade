"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setComponent } from "@/store/gensetSlice";

interface AddToBuildButtonProps {
    id: string;
    name: string;
    category: "engine" | "alternator" | "fuel-tank" | "control-panel";
}

export default function AddToBuildButton({ id, name, category }: AddToBuildButtonProps) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleAddToBuild = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(
            setComponent({
                category,
                product: { id, name },
            })
        );

        router.push("/build-genset");
    };

    return (
        <button
            onClick={handleAddToBuild}
            className="w-full lg:w-1/2 px-6 md:px-8 lg:px-10 py-3 text-left btn-primary shine-effect"
        >
            Add To Build
        </button>
    );
}

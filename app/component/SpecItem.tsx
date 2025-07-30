// components/SpecItem.tsx

type SpecItemProps = {
    label: string;
    value: string;
};

export default function SpecItem({ label, value }: SpecItemProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="text-xs text-gray-500 uppercase mb-1 tracking-wide">{label}</div>
            <div className="text-sm font-normal text-[var(--foreground)]">{value}</div>
        </div>
    );
}


type Props = {
    title: string;
};

export default function PageHeader({ title }: Props) {
    return (
        <div className="h-[200px] bg-black text-white flex items-center justify-center">
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
    );
}

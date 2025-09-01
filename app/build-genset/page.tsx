'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { useState, useEffect } from 'react';
import { removeComponent } from '@/store/gensetSlice';
import clsx from 'clsx';
import Image from 'next/image';

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < breakpoint);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [breakpoint]);

    return isMobile;
}

export default function BuildGensetPage() {
    const components = useSelector((state: RootState) => state.genset.components);
    const dispatch = useDispatch();

    const categories = [
        { key: 'engine', label: 'Engine', icon: '⚙️' },
        { key: 'alternator', label: 'Alternator', icon: '🔌' },
        { key: 'fuel-tank', label: 'Fuel Tank', icon: '⛽' },
        { key: 'control-panel', label: 'Control Panel', icon: '🎛️' },
    ];

    const [frequency, setFrequency] = useState<'50Hz' | '60Hz'>('50Hz');
    const [type, setType] = useState<'Silent' | 'Open'>('Silent');
    const [corrosion, setCorrosion] = useState(false);
    const [noiseLevel, setNoiseLevel] = useState('');
    const [message, setMessage] = useState('');
    const [showForm, setShowForm] = useState(false);
    const isMobile = useIsMobile();

    const [client, setClient] = useState({
        company: '',
        name: '',
        email: '',
        location: '',
        useCase: '',
        tender: '',
    });

    useEffect(() => {
        const name = components.engine?.name?.toLowerCase();
        if (name?.includes('60hz')) setFrequency('60Hz');
        else if (name) setFrequency('50Hz');
    }, [components.engine]);

    const handleSubmit = () => {
        console.log({
            components,
            frequency,
            type,
            corrosion,
            noiseLevel,
            message,
            client,
        });
        alert('Quotation submitted (check console)');
    };

    return (
        <>
            {/* Hero Section */}
            <div
                      className="bg-[var(--foreground)] h-[120px] md:h-[180px] rounded-[30px] mx-4 relative overflow-hidden mb-8"
                      style={{ background: "linear-gradient(90deg, var(--foreground), var(--hover))" }}
                    >
                      <div className="container h-full flex items-end pb-4">
                        <h1 className="text-[var(--background)] text-2xl md:text-4xl">
                          Diesel Generators
                        </h1>
                      </div>
                    </div>

            {/* Main Section */}
            <div className="max-w-4xl mx-auto p-6 space-y-12 text-[var(--foreground)] font-normal">
                {/* Step 1: Component Selection */}
                <section>
                    <h2 className="text-xl mb-4">1. Select Components</h2>
                    <div className="flex flex-col gap-4">
                        {categories.map(({ key, label, icon }) => {
                            const selected = components[key];
                            return (
                                <div
                                    key={key}
                                    className="flex justify-between items-center border border-gray-200 p-4 rounded-xl bg-white shadow-sm hover:shadow transition"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-gray-50 flex items-center justify-center text-2xl">
                                            {selected ? (
                                                <Image
                                                    src={`/components/${key}/${selected.id}.jpg`}
                                                    alt={selected.name}
                                                    width={800}
                                                    height={600}
                                                />
                                            ) : (
                                                <span>{icon}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h3>{label}</h3>
                                            {key === 'fuel-tank' && (
                                                <p className="text-xs text-gray-500 italic">Default fuel tank is 1000L</p>
                                            )}
                                            <p className="text-sm text-gray-500">
                                                {selected ? selected.name : 'No product selected'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <a
                                            href={`/${key}`}
                                            className="px-4 py-2 btn-primary shine-effect"
                                        >
                                            {selected ? 'Change' : 'Choose'}
                                        </a>
                                        {selected && (
                                            <button
                                                onClick={() => dispatch(removeComponent(key))}
                                                className="px-4 py-2 btn-second shine-effect"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Step 2: Frequency & Type */}
                <section>
                    <h2 className="text-xl mb-4">2. Frequency & Type</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <p className="mb-2 text-sm">Frequency</p>
                            <div className="px-4 py-2 border rounded bg-gray-100 text-sm text-gray-700">
                                {frequency}
                            </div>
                            <p className="text-xs mt-1 text-gray-500">
                                Automatically selected based on the engine you selected.
                            </p>
                            <p className="text-xs text-gray-500">
                                Please select the frequency that suits your country.
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm">Type</p>
                            <div className="flex gap-3">
                                {['Silent', 'Open'].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setType(t as 'Silent' | 'Open')}
                                        className={clsx(
                                            'px-4 py-2',
                                            type === t
                                                ? 'btn-primary shine-effect'
                                                : 'btn-second shine-effect'
                                        )}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 3: Additional Features */}
                <section>
                    <h2 className="text-xl mb-4">3. Additional Features</h2>
                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            checked={corrosion}
                            onChange={(e) => setCorrosion(e.target.checked)}
                        />
                        Corrosion Protection
                    </label>
                    <div className="mt-4">
                        <label className="block text-sm mb-1">Noise Level (e.g. 75 dB @ 1m)</label>
                        <input
                            type="text"
                            value={noiseLevel}
                            onChange={(e) => setNoiseLevel(e.target.value)}
                            className="w-full border px-4 py-2 rounded"
                        />
                    </div>
                </section>

                {/* Step 5: Message & Submit */}
                <section>
                    <h2 className="text-xl mb-4">4. Submit</h2>
                    <button
                        onClick={() => setShowForm(true)}
                        className="mt-2 w-full px-6 py-3 rounded-lg bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--hover)] transition"
                    >
                        Submit for Quotation
                    </button>
                </section>
            </div>

            {/* Modal / Drawer for Form */}
            {showForm && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center md:p-10">
                    <div
                        className={clsx(
                            "bg-white rounded-xl w-full max-w-2xl p-6 overflow-y-auto shadow-lg",
                            isMobile ? "fixed bottom-0 left-0 right-0 rounded-b-none h-[90vh]" : "max-h-[90vh]"
                        )}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Submit for Quotation</h3>
                            <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-black text-xl">×</button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input type="text" placeholder="Company Name" className="border px-4 py-2 rounded" value={client.company} onChange={(e) => setClient({ ...client, company: e.target.value })} />
                            <input type="text" placeholder="Your Name" className="border px-4 py-2 rounded" value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} />
                            <input type="email" placeholder="Email" className="border px-4 py-2 rounded" value={client.email} onChange={(e) => setClient({ ...client, email: e.target.value })} />
                            <input type="text" placeholder="Location" className="border px-4 py-2 rounded" value={client.location} onChange={(e) => setClient({ ...client, location: e.target.value })} />
                            <input type="text" placeholder="Use Case" className="sm:col-span-2 border px-4 py-2 rounded" value={client.useCase} onChange={(e) => setClient({ ...client, useCase: e.target.value })} />
                            <div className="sm:col-span-2">
                                <p className="text-sm mb-1">Is this for a tender?</p>
                                <div className="flex gap-4">
                                    {['yes', 'no'].map((t) => (
                                        <label key={t} className="flex items-center gap-2 text-sm">
                                            <input type="radio" name="tender" value={t} checked={client.tender === t} onChange={(e) => setClient({ ...client, tender: e.target.value })} />
                                            {t === 'yes' ? 'Yes' : 'No'}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <textarea
                                rows={4}
                                placeholder="Additional instructions..."
                                className="w-full border px-4 py-2 rounded"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={() => {
                                handleSubmit();
                                setShowForm(false);
                            }}
                            className="mt-6 w-full px-6 py-3 rounded-lg bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--hover)] transition"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductDetailView({ products }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const prod = products[activeIdx];

    return (
        <div className="flex h-[calc(100vh-4rem)]">
            {/* Left: Product List */}
            <nav className="w-1/4 border-r overflow-y-auto">
                {products.map((p, i) => (
                    <button
                        key={p.title}
                        onClick={() => setActiveIdx(i)}
                        className={`
              w-full text-left px-4 py-3 hover:bg-gray-100 focus:outline-none
              ${i === activeIdx ? 'bg-blue-50 font-semibold' : ''}
            `}
                    >
                        {p.title}
                    </button>
                ))}
            </nav>

            {/* Right: Detail Panel */}
            <div className="w-3/4 p-6 overflow-y-auto">
                <h2 className="text-3xl font-bold mb-4">{prod.title}</h2>
                <div className="w-full mb-6 rounded-lg overflow-hidden">
                    <Image
                        src={prod.imageSrc}
                        alt={prod.alt}
                        layout="responsive"
                        width={800}
                        height={600} // Or your aspect ratio (e.g., 1280x720 for 16:9)
                        objectFit="cover" // or "contain" if you want no crop
                        quality={75}
                        className="rounded-lg"
                    />
                </div>

                <p className="text-gray-700 mb-6">{prod.longDescription}</p>

                {/* Render spec groups */}
                {(prod.specGroups || [{ title: 'Specs', specs: prod.specs }]).map((g) => (
                    <section key={g.title} className="mb-8">
                        <h3 className="text-2xl font-semibold mb-2">{g.title}</h3>
                        <div className="h-px bg-gray-200 mb-4"></div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-600">
                            {g.specs.map((s) => (
                                <li key={s.label} className="flex">
                                    <span className="w-36 font-medium">{s.label}:</span>
                                    <span>{s.value}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}

            </div>
        </div>
    );
}

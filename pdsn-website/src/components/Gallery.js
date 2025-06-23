// components/Gallery.js
import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ images }) {
    const [selected, setSelected] = useState(null);

    return (
        <>
            {/* Grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative w-full h-40 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                        onClick={() => setSelected(idx)}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            layout="fill"
                            objectFit="cover"
                            className="transform hover:scale-105 transition-transform duration-300"
                            quality={70}
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selected !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-3/4">
                        <Image
                            src={images[selected].src}
                            alt={images[selected].alt}
                            layout="fill"
                            objectFit="contain"
                            quality={90}
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold"
                            onClick={() => setSelected(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

// components/ProductAccordion.js
import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductAccordion({ products }) {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="space-y-12">
            {products.map((prod, i) => {
                const isOpen = openIndex === i;
                const isEven = i % 2 === 1;

                // **Fallback to flat specs if specGroups is missing**
                const groups = prod.specGroups
                    ? prod.specGroups
                    : [
                        {
                            title: '📋 Specs',
                            specs: prod.specs || [],
                        },
                    ];

                return (
                    <div
                        key={prod.title}
                        className="flex flex-col md:flex-row items-start md:items-center"
                    >
                        {/* Image Column */}
                        <div
                            className={`w-full md:w-1/2 h-64 md:h-80 relative rounded-lg overflow-hidden 
                ${isEven ? 'md:order-last md:ml-8' : 'md:mr-8'}`}
                        >
                            <Image
                                src={prod.imageSrc}
                                alt={prod.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 ease-in-out hover:scale-105"
                                quality={75}
                            />
                        </div>

                        {/* Text & Accordion Column */}
                        <div className="w-full md:w-1/2 mt-6 md:mt-0">
                            <h3 className="text-2xl font-semibold text-gray-800">{prod.title}</h3>
                            <p className="mt-2 text-gray-600">{prod.brief}</p>

                            <button
                                onClick={() => toggle(i)}
                                className="mt-4 inline-flex items-center text-blue-600 hover:underline focus:outline-none"
                            >
                                {isOpen ? 'Hide Details' : 'View Details'}
                                <span className="ml-2 text-xl">{isOpen ? '−' : '+'}</span>
                            </button>

                            <div
                                className={`mt-4 overflow-hidden transition-max-h duration-500 ease-in-out
                  ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
                            >
                                <p className="text-gray-700 mb-6">{prod.longDescription}</p>

                                {/* Render each group (either specGroups or fallback) */}
                                {groups.map((group) => (
                                    <div key={group.title} className="mb-6">
                                        <h4 className="text-xl font-medium text-gray-800 mb-2">
                                            {group.title}
                                        </h4>
                                        <div className="h-px bg-gray-200 mb-4"></div>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-600">
                                            {group.specs.map((spec) => (
                                                <li key={spec.label} className="flex">
                                                    <span className="w-36 font-medium">{spec.label}:</span>
                                                    <span>{spec.value}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

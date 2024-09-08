import Image from 'next/image'
import React from 'react'

export default function OrganizationalStructure() {
    return (
        <>
            <section className="py-14">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            Organizational Structure
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Azami Constructions consists of key divisions, including Equipment, Highway, Engineering/Quantity Surveying, Quality Control, and Aggregate Production. These divisions collaborate to deliver road construction, aggregate production, and construction materials testing.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-full h-[390px]">
                            <Image
                                src="/chart.svg"
                                alt="Azami construction team at work"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                                style={{ objectPosition: "bottom" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <>
            {/* About Us Section */}
            <section id="about-us" className="py-14">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            About Azami Construction
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            At Azami Construction, we specialize in civil engineering and construction services, driving Chad’s infrastructure growth through sustainable solutions. Our projects span multiple sectors, from road construction to hospital equipment, contributing to the development of communities nationwide.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-full h-[390px]">
                            <Image
                                src="/about.jpg"
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

            {/* New Section: Our Expertise */}
            <section id="expertise" className="py-14">
                <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                        <div className="relative w-full h-[390px]">
                            <Image
                                src="/expirence.jpg"
                                alt="Expertise in construction"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                                style={{ objectPosition: "bottom" }}
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-primary mb-6">
                            Our Expertise
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            With over a decade of experience in the construction industry, Azami Construction has mastered the art of delivering large-scale projects efficiently. Our expertise ranges from urban infrastructure to specialized hospital construction, ensuring top-notch quality in every project.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

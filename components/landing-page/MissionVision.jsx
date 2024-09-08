import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MissionVisionData } from "@/constants"

export default function MissionVision() {
    return (
        <>
            {/* Mission & Vision Section */}
            <section id="mission-vision" className="py-14 mt-20 px-4 md:px-20 bg-secondary">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Our Mission & Vision
                    </h2>

                    <p className="text-lg max-w-3xl mx-auto text-secondary-foreground/65 text-center mb-12">
                        {"Our mission is to drive Chad’s infrastructure development with top-quality civil engineering and construction services. We strive to become a leading regional provider, known for innovation and excellence in every project."}
                    </p>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {MissionVisionData.map((card) => (
                            <div
                                key={card.id}
                                className="flex flex-col items-center bg-white/20 p-6 rounded-lg shadow-md space-y-8"
                            >
                                <div className="text-white mb-4 flex justify-between w-full">
                                    <card.ico size={32} />
                                    <ArrowUpRight size={32} />
                                </div>

                                <div className="text-start">
                                    <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                                    <p className="text-primary-foreground/65">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </>
    )
}

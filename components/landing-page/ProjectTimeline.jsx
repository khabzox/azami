import { projects } from "@/constants";

export function ProjectTimeline() {
    return (
        <section>
            <div className="relative max-w-7xl mx-auto">
                {/* Vertical timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-300"></div>

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                            } mb-10 lg:mb-20 relative`}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 bg-destructive rounded-full z-10"></div>

                        {/* Left/Right content blocks */}
                        <div
                            className={`w-full lg:w-1/2 p-5 shadow-lg rounded-lg ${index % 2 === 0 ? "lg:ml-10" : "lg:mr-10"
                                }`}
                        >
                            <h3 className="text-secondary text-xl font-bold">{project.title}</h3>
                            <p className="text-lg text-gray-700">Project Value: {project.value}</p>
                            <p className="text-sm text-gray-600">Contract ID: {project.contractID}</p>
                            <p className="text-sm text-gray-600">Location: {project.location}</p>
                            <p className="text-sm text-gray-600">Project Area: {project.area}</p>
                            <p className="text-sm text-gray-600">Award Date: {project.awardDate}</p>
                            <p className="text-sm text-gray-600">Expected Completion: {project.completionDate}</p>
                            <p className="text-sm text-gray-600">Client: {project.client}</p>
                            <p className="mt-4 text-base text-gray-600">{project.scope}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

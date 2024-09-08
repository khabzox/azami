import { GridCards } from "./GridCards";

export default function Services() {
    return (
        <div className="my-48 max-w-7xl mx-auto">
            <div className="flex flex-col">
                <div className="px-10 3xl:px-0">
                    <h1
                        className={`text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold`}
                    >
                        Why Choose Us?
                    </h1>

                    <p className="text-sm sm:text-base md:text-xl text-accent-TextHover font-semibold py-10">
                        Discover why Azami Construction stands out in the industry. Our commitment to excellence is reflected in our:
                    </p>
                </div>
                <GridCards />
            </div>
        </div>
    )
}

import { Button } from "../ui/button";
import Stats from "./Stats";

export default function Hero() {
    return (
        <section className="relative max-w-7xl mx-auto text-center pt-16 bg-gray-50">
            <h1 className="text-5xl font-extrabold text-text">
                Azami Engineering & Construction
            </h1>
            <p className="text-text-muted mt-4">Leveraging Expertise, Driving Development in Chad.</p>
            <div className="mt-8 flex justify-center space-x-4">
                <Button variant="custom" className="bg-primary hover:bg-primary/90 text-white h-11 w-32 rounded-md">Learn More</Button>
                <Button variant="custom" className="text-text-muted h-11 w-32 rounded-md border border-text-muted">Contact Us</Button>
            </div>
            <div className="mt-8">
                <span className="text-yellow-500 text-2xl">★★★★★</span>
                <p className="text-text-muted mt-2">from 95% clients reviews</p>
            </div>

            <div className="absolute top-36 left-0 mt-16 ml-12 space-y-4">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center"></div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"></div>
            </div>

            <div className="absolute top-36 right-0 mt-16 mr-12 space-y-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"></div>
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center"></div>
            </div>
            <Stats />
        </section>
    );
}

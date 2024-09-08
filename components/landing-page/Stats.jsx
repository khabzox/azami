import Image from "next/image";
import { LayoutPanelLeft, Gauge } from "lucide-react";

export default function Stats() {
    return (
        <section className="pb-20 grid grid-cols-30 grid-rows-5 px-8">
            <div className=" col-start-1 col-end-6 row-start-1 row-end-6">
                <Image
                    src="/hero-card.jpg"
                    alt="Hero Image"
                    width={320}
                    height={240}
                    className="rounded-2xl"
                />
            </div>
            <div className="bg-secondary col-start-7 col-end-11 row-start-2 row-end-6 rounded-2xl">
                <h3 className="flex justify-center items-center h-full text-white font-semibold">{"Building Chad’s Future Together"}</h3>
            </div>
            <div className="bg-white col-start-12 col-end-18 row-start-3 row-end-6 rounded-2xl text-start p-5 space-y-2">
                <div className="bg-destructive p-1 max-w-8 rounded-lg">
                    <LayoutPanelLeft />
                </div>
                <h3 className="font-bold">Innovative Infrastructure Solutions</h3>
                <p className="font-light text-sm">Driving sustainable development across Chad.</p>
            </div>
            <div className="bg-destructive col-start-19 col-end-24 row-start-2 row-end-6 rounded-2xl flex flex-col justify-center space-y-2 p-2">
                <h3 className="font-bold">Excellence in Civil Engineering</h3>
                <p className="font-light text-sm">Creating durable and efficient structures.</p>
            </div>
            <div className="bg-secondary col-start-25 col-end-31 row-start-1 row-end-6 rounded-2xl h-full p-6 text-center flex flex-col justify-center items-center relative overflow-hidden">
                <Image
                    src="/circle.png"
                    alt="background circle"
                    width={160}
                    height={160}
                    className="absolute -top-24 -left-16 z-0 opacity-10 w-64 h-64"
                />

                <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-secondary via-transparent to-transparent z-5"></div>

                <div className="z-10 flex flex-col items-start text-start pt-16 space-y-2 relative">
                    <div className="bg-transparent text-white p-2 rounded-full">
                        <Gauge size={32} />
                    </div>

                    <p className="text-white text-lg font-semibold drop-shadow-lg">
                        Achieve Optimal Efficiency and Boost Productivity
                    </p>
                </div>
            </div>


        </section>
    );
}

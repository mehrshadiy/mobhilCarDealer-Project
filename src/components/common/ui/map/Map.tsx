import {ImageView} from "@/components";

interface Prop {
    className?: string
}

export function Map({className = ''}: Prop) {
    return (
        <div className={className}>
            <h1 className="font-bold text-2xl md:text-4xl xl:text-5xl text-center">Our dealer shops</h1>
            <p className="sm:w-3/5 max-w-4xl mx-auto py-3 lg:py-5 text-center text-xs md:text-sm xl:text-base leading-5">
                Our dealership branches proudly serve as trusted hubs for customer satisfaction and reliability. Through
                our extensive dealership network, we strive to offer top-notch services and support. Our objective is to
                foster close relationships and deliver varied, high-quality solutions to our customers.</p>
            <div className="mt-5 -z-10">
                <div className="max-w-6xl mx-auto relative">
                    <ImageView src={"/assets/images/about/map.svg"} alt={'map'} width={1609} height={946}/>
                    <div
                        className="w-[10%] h-1/6 max-w-[80px] max-h-[77px] absolute top-[15%] left-[8%] rounded-xl bg-white flex justify-center items-center shadow-xl">
                        <ImageView src={"/assets/images/about/car-blue.png"} alt={'car'} width={94} height={78}
                                   classname={"w-[50%]"}/>
                    </div>
                    <div
                        className="w-[13%] h-[21%] max-w-[95px] max-h-[90px] absolute top-[35%] left-[40%] rounded-2xl  bg-primary-100 flex justify-center items-center">
                        <ImageView src={"/assets/images/about/carVector.png"} alt={'car'} width={291} height={244}
                                   classname={"w-[50%]"}/>
                    </div>
                    <div
                        className="w-[15%] h-1/4 max-w-[110px] max-h-[108px] absolute top-[18%] right-[10%] rounded-2xl bg-white flex justify-center items-center shadow-xl">
                        <ImageView src={"/assets/images/about/car-blue.png"} alt={'car'} width={94} height={78}
                                   classname={"w-[50%]"}/>
                    </div>
                    <div
                        className="w-[8%] h-[13%] max-w-[58px] max-h-[56px] absolute bottom-[20%] left-1/2 rounded-lg bg-white flex justify-center items-center shadow-xl">
                        <ImageView src={"/assets/images/about/car-blue.png"} alt={'car'} width={94} height={78}
                                   classname={"w-[50%]"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
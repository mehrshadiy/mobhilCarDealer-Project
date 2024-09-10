import {CarsType, EntityType} from "@/types";
import {ImageView} from "@/components";
import Link from "next/link";
import {formatNumberWithCommas} from "@/utils/formatNumber";

interface Props {
    data: EntityType<CarsType>
}

export function TrendingSliderCard({data}: Props) {
    const price = formatNumberWithCommas({number: data.attributes.price})

    return (
        <Link href={`/product/${data.id}`} className={''}>
                <ImageView height={data.attributes.thumbnail.data.attributes.height} width={data.attributes.thumbnail.data.attributes.width} classname="rounded-bl-[100px] h-96 lg:h-[700px] w-full"
                     src={data.attributes.thumbnail.data.attributes.url ? data.attributes.thumbnail.data.attributes.url : ''} alt={data.attributes.title}/>
            <div className="w-full pl-[12%] pr-[12%] absolute mx-auto left-0 right-0 top-0 pt-9 sm:pt-12 h-full ">
                <div className="flex w-full justify-between">
                    <p className="text-white text-xs sm:text-sm md:text-base xl:text-lg font-semibold">{data.attributes.car_class.data.attributes.title ? data.attributes.car_class.data.attributes.title : ''}</p>
                    <p className="text-white text-xs sm:text-sm md:text-base xl:text-lg font-light">{data.attributes.title ? data.attributes.title : ''}</p>
                </div>
                <div className="flex w-full justify-between mt-2.5">
                    <p className="text-white text-base sm:text-xl md:text-3xl xl:text-4xl font-light">
                        {data.attributes.car_model.data.attributes.title ? data.attributes.car_model.data.attributes.title : ''}</p>
                    <p className="text-white text-base sm:text-xl md:text-3xl xl:text-4xl font-semibold">$
                        {price}</p>
                </div>
            </div>
        </Link>
    )
}
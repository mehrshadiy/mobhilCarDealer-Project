import {CarFeatures, IconBox, ImageView} from "@/components";
import {twMerge} from "tailwind-merge";
import {CarsType, EntityType} from "@/types";
import Link from "next/link";
import {formatNumberWithCommas} from "@/utils/formatNumber";

interface Props {
data: EntityType<CarsType>
    className?: string
}

export function ProductsListCard({data, className}: Props) {

    const formattedPrice = formatNumberWithCommas({number: data.attributes.price})

    return (
        <Link href={`/product/${data.id}`}>
            <div className={twMerge("w-[330px] lg:w-[354px] h-[395px] xl:h-[415px] mx-auto overflow-hidden rounded-lg shadow-7xl hover:shadow-8xl hover:transition-shadow hover:duration-500 duration-500 cursor-pointer relative", className) }>
                <div className={'relative'}>
                    <ImageView classname="h-48 w-full object-cover object-center"
                               src={data.attributes.thumbnail.data.attributes.url} height={data.attributes.thumbnail.data.attributes.height} width={data.attributes.thumbnail.data.attributes.width} alt=""/>
                    <div className={'flex items-center justify-center opacity-0 w-full h-full absolute z-50 backdrop-blur-sm mx-auto top-0 hover:opacity-100 hover:transition-opacity hover:duration-500 duration-500 '}>
                        <IconBox icon={'icon-search text-5xl text-white'}/>
                    </div>
                </div>
                <div className="flex flex-col items-start py-8 px-5">
                    <h3 className="text-[26px] font-bold hover:text-primary-100">
                        {data.attributes.title}
                    </h3>
                    <h4 className="text-secondary-50 text-[15px] font-semibold pt-1 uppercase">
                        {data.attributes.car_class.data.attributes.title} CAR
                    </h4>
                    <span className="px-4 py-2 bg-primary-100 rounded-[30px] text-base font-semibold text-white absolute top-[43%] xl:top-[42%] right-5 z-50">
                        $ {formattedPrice}
                    </span>
                    <CarFeatures data={data}/>
                </div>
            </div>
        </Link>
    )
}
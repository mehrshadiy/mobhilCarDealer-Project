import { CarFeatures, ImageView } from "@/components";
import { CarsType, EntityType } from "@/types";
import { formatNumberWithCommas } from "@/utils/formatNumber";
import Link from "next/link";

interface Props {
    data: EntityType<CarsType>,
}

export function PaginatedSliderCard({ data }: Props) {
    const formattedPrice = formatNumberWithCommas({ number: data.attributes.price });

    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const href = currentUrl.includes('product') ? `${data.id}` : `product/${data.id}`;

    return (
        <Link href={href}>
            <ImageView height={1920} width={1080}
                       classname="rounded-[30px] h-[388px] sm:h-[415px] xl:h-[495px]"
                       src={data.attributes.thumbnail.data.attributes.url} alt={data.attributes.thumbnail.data.attributes.name} />
            <div className={'w-full h-[388px] sm:h-[415px] xl:h-[495px] rounded-[30px] bg-paginatedSliderBg absolute right-0 top-0 left-0 bottom-0 z-10'}></div>
            <div className="absolute z-20 top-8 md:top-9 xl:top-11 left-3 sm:left-6 xl:left-10 text-white flex flex-col items-start">
                <p className="text-xs xl:text-sm font-medium tracking-[4px]">
                    {data.attributes.car_class.data.attributes.title} CAR
                </p>
                <p className="text-2xl xl:text-3xl font-bold pt-32 sm:pt-40 xl:pt-44">
                    {data.attributes.car_brand.data.attributes.title}
                </p>
                <button className="px-4 py-2 bg-primary-100 rounded-[30px] text-base xl:text-lg font-semibold mt-8">
                    $ {formattedPrice}
                </button>
                <CarFeatures data={data} />
            </div>
        </Link>
    )
}

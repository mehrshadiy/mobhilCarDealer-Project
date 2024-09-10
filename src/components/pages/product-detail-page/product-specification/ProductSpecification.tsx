import {CarFeatures, PhoneButton} from "@/components"
import {CarsType, EntityType} from "@/types";
import {formatNumberWithCommas} from "@/utils/formatNumber";

interface Props {
   data: EntityType<CarsType>
}

export function ProductSpecification({data}: Props) {
    const formattedPrice = formatNumberWithCommas({number: data.attributes.price})

    return (
        <>
            <div className={'flex gap-x-3'}>
                <h1 className="font-bold text-xl lg:text-3xl mb-3">{data.attributes.title}</h1>
            </div>
            <h4 className="text-sm text-secondary-50 mb-3 tracking-[3px] text-secondary-200">{data.attributes.car_class.data.attributes.title}</h4>
            <p className="w-10/12 max-w-md text-sm text-secondary-100 mb-5">{data.attributes.excerpt}</p>
            <CarFeatures data={data} marginBottom={40}/>
            <div className="mb-5 flex gap-3">
                <span className="bg-primary-100 text-white font-bold text-xs md:text-sm lg:text-base rounded-md px-5 py-2">$ {formattedPrice}</span>
                <PhoneButton buttonStyle={"bg-White-200 hover:shadow-lg border border-White-200 hover:border-primary-100"}/>
            </div>
        </>
    );
}
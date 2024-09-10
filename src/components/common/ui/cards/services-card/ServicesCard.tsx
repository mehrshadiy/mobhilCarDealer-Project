import {IconBox} from "@/components";
import {EntityType, ServicesType} from "@/types";

interface Props {
    data: EntityType<ServicesType>
}

export function ServicesCard({data}: Props) {
    return (
        <>
            <IconBox icon={`${data.attributes.icon} w-1/5 text-3xl text-blue-700`}/>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold pt-6 md:pt-9 lg:pt-12">{data.attributes.title}</h2>
            <p className="text-[10px] sm:text-sm lg:text-base mt-3">{data.attributes.text}</p>
        </>
    )
}
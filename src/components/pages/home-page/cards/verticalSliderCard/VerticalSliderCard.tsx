import {ImageView} from "@/components";
import {EntityType, ImageType} from "@/types";

interface Props {
    data: EntityType<ImageType>
}

export function VerticalSliderCard({data}: Props) {


    return (
        <>
            {
                data &&
                <ImageView height={1920} width={1080} classname="object-cover object-center h-full"
                           src={data.attributes.url} alt={""}/>
            }
        </>
    )
}
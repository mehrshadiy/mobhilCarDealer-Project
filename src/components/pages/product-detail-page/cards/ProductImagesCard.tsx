import {ImageView} from "@/components";
import {EntityType, ImageType} from "@/types";

interface Props {
    data: EntityType<ImageType>
    index: number
    className?: string
}

export function ProductImagesCard({data ,index, className = ''}: Props) {
    return (
        <ImageView
            key={index}
            src={data.attributes.url}
            alt={data.attributes.name}
            width={data.attributes.width}
            height={data.attributes.height}
            classname={className}
        />
    );
}
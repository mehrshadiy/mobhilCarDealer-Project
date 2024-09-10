import {FeaturesType} from "@/types/Features";

interface Props {
    data?: FeaturesType[]
}

export function ProductFeatures({ data }: Props) {
    return (
        <div className="text-secondary-100 text-sm lg:text-base text-justify pl-3">
            {
                data && data.map((item, index) => (
                    item.children && item.children.map((childItem, childIndex) => (
                        childItem.children && childItem.children.map((featureItem, grandChildIndex) => (
                            <li key={`${index}-${childIndex}-${grandChildIndex}`} className={'max-w-2xl'}>{featureItem.text}</li>
                        ))
                    ))
                ))
            }
        </div>
    );
}

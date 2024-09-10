import Link from "next/link";
import React from "react";

interface Props {
data: {
    data: Array<any>
}
}

export function PopularBrands({data}: Props) {

    return (
        <>
            <ul className="flex gap-[20px] sm:gap-[30px] lg:gap-[21px] mt-3.5">
                {
                    data.data.map((item, index) => {
                        return (
                            <li key={index}
                                className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold hover:text-blue-600">
                                <Link href={`/products?carBrand=${item.attributes.title}`}>
                                    {item.attributes.title}
                                </Link>
                            </li>
                        )
                    })
                }
                <li className="text-xs xs:text-sm sm:text-xl xl:text-2xl font-bold text-White-100 cursor-pointer hover:text-blue-600">
                    <Link href={'/products'}>
                        24+ more
                    </Link>
                </li>
            </ul>
        </>
    )
}
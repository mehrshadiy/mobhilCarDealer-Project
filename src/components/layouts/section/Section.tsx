import React from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    className?: string
    children: React.ReactNode
}

export function Section({className='', children}: Props) {
    return (
        <section className={twMerge("container mx-auto px-4 mb-16 relative lg:mb-24",className)}>
            {children}
        </section>
    )
}
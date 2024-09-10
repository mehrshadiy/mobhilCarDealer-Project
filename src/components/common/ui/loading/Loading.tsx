import {twMerge} from "tailwind-merge";

interface Props {
    className?: string
}

export function Loading({className}: Props) {
    return (
        <div className={twMerge('flex flex-wrap gap-x-4 gap-y-9 mt-10 justify-center items-center animate-bounce w-full',className)}>
            <div className={"bg-gray-200 p-10 w-fit h-fit lg:min-w-[364px] mx-auto overflow-hidden rounded-t-full rounded-br-full shadow-7xl hover:shadow-8xl hover:transition-shadow hover:duration-500 duration-500 cursor-pointer relative font-bold font-serif text-2xl flex items-center justify-center"}>
                is Loading ...
            </div>
        </div>
    )
}
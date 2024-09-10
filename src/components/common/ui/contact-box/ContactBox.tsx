import {IconBox} from "@/components";
import Link from "next/link";

interface Props {
    link?: string,
    text: string
}

export function ContactBox({link, text}: Props) {
    return (
        <>
            {
                link ?
                    <>
                        <div className="bg-primary-100 flex justify-center items-center w-12 h-12 rounded-full left-6 relative translate-y-1.5 lg:translate-y-2">
                            <IconBox icon={'icon-phone text-white'} size={24}/>
                        </div>
                        <Link className="text-sm lg:text-base bg-white-100 bg-primary-50 rounded-xl w-[87%] flex self-end py-5 pl-9 md:pl-12"
                            href={link}>{text}
                        </Link>
                    </>
                    :
                    <>
                        <div className="bg-primary-100 flex justify-center items-center w-12 h-12 rounded-full left-6 relative translate-y-1.5 lg:translate-y-2">
                            <IconBox icon={'icon-building text-white text-2xl'}></IconBox>
                        </div>
                        <p className="text-sm lg:text-base bg-white-100 py-5 pl-12 text-left w-[87%] bg-primary-50 rounded-xl pl-9 md:pl-12">
                            {text}
                        </p>
                    </>
            }
        </>
    );
}
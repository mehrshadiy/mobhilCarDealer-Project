import Link from "next/link";
import {PopulateType} from "@/types";
import {MenuItemType} from "@/types/MenuItem";

interface Props {
    menuItems : PopulateType<MenuItemType>
    title: string
}

export function FooterMenu({menuItems, title}: Props) {
    return (
        <>
            <h4 className="font-bold mb-5">
                {title}
            </h4>
            <ul className="flex flex-col gap-3 text-secondary-100 text-sm lg:text-base">
                {
                    menuItems.data.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={'hover:text-primary-100 active:text-primary-100'}
                                      href={item.attributes.link}>{item.attributes.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}
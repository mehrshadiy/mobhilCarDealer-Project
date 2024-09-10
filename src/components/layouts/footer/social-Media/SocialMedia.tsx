import Link from "next/link";
import {IconBox} from "@/components";

export function SocialMedia() {

    //Todo fix linkedin icon issue . It isn't displayed
    return (
        <ul className="flex gap-3">
            <li>
                <Link href="#">
                    <IconBox icon={"icon-youtube text-Purple-50 hover:text-primary-100 active:text-primary-100"}
                             size={18}/>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <IconBox icon={"icon-linkedInLogo text-Purple-50 hover:text-primary-100 active:text-primary-100"}
                             size={18}/>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <IconBox icon={"icon-twitterLogo text-Purple-50 hover:text-primary-100 active:text-primary-100"}
                             size={18}/>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <IconBox icon={"icon-facebookLogo text-Purple-50 hover:text-primary-100 active:text-primary-100"}
                             size={18}/>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <IconBox icon={"icon-instagramLogo text-Purple-50 hover:text-primary-100 active:text-primary-100"}
                             size={18}/>
                </Link>
            </li>
        </ul>
    );
}
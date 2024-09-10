import Link from "next/link";
import {IconBox} from "@/components";

export function SocialMediaShare() {
    return (
        <div>
            <ul className="flex gap-5 text-primary-100">
                <li>
                    <Link href={"#"} className={"text-secondary-400"}>
                        Share
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <IconBox icon={"icon-linkedin text-primary-400"} size={18}/>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <IconBox icon={"icon-twitterLogo text-cyan-500"} size={18}/>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <IconBox icon={"icon-facebookLogo text-blue-600"} size={18}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
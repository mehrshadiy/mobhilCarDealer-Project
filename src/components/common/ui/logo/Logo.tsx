import Link from "next/link";
import {ImageView} from "@/components";

export function Logo() {
    return (
        <Link className="order-1 lg:pt-7 basis-3/5 sm:basis-4/5 lg:basis-auto" href="/">
            <ImageView src={"/assets/images/logo.png"} alt={"LOGO"} width={181} height={37}/>
        </Link>
    );
}
import {Footer, Header} from "@/components";
import {ReactNode} from "react";
import {ApiResponseType, MenuType} from "@/types";
interface Props {
    children: ReactNode
    MenuData: ApiResponseType<MenuType>
}

export function Layout({children, MenuData}: Props) {
    return (
        <>
            <Header MenuData={MenuData}/>
            <main>
                {children}
            </main>
            <Footer MenuData={MenuData}/>
        </>
    );
}


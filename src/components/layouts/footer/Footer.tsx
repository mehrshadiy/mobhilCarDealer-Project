import {
    ContactBox,
    FooterMenu,
    ImageView,
    LoginModal,
    Logo,
    PhoneButton,
    RegisterModal,
    SocialMedia
} from "@/components";
import {useMenu} from "@/hooks";
import Link from "next/link";
import {useModal} from "@/store/ModalContext";
import {ApiResponseType, MenuType} from "@/types";

interface Props {
    MenuData: ApiResponseType<MenuType>
}

export function Footer({MenuData}: Props) {

    // const {data: quickMenuItems} = useMenu({title:"Quick Links"})
    const {data: supportMenuItems} = useMenu({title: "Support", MenuData: MenuData})

    const {openModal, currentModal} = useModal()

    return (
        <footer>
            {currentModal === 'login' && <LoginModal/>}
            {currentModal === 'register' && <RegisterModal/>}
            <div className="container m-auto px-4 mt-32 lg:mt-64 relative">
                <div
                    className="max-w-6xl m-auto bg-primary-100 max-h-72 rounded-3xl lg:rounded-[40px] relative flex p-4 sm:py-7 md:p-9 lg:p-16">
                    <div className="basis-2/4">
                        <div
                            className="w-full text-sm text-wrap xs:text-[15px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] text-white">
                            Have any question about us?
                        </div>
                        <div className="flex pt-5 sm:pt-9 lg:pt-14 gap-2 lg:gap-4">
                            <PhoneButton buttonStyle={"bg-white"}/>
                            <Link
                                className="hidden self-center sm:inline-block text-[8px] sm:text-xs lg:text-base py-2 px-1.5 sm:px-3 lg:px-5 text-center rounded-lg border border-White-200 text-White-200 font-medium" href={'/contact'}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="basis-2/4 relative">
                        <ImageView src={"/assets/images/bradley-dunn-qijkjkJm63c-unsplash11.jpg"} alt={'car'}
                                   width={300} height={450}
                                   classname={"w-full object-cover rounded-2xl lg:rounded-[49px] shadow-4xl absolute -top-14 sm:-top-24 md:-top-28 lg:md:-top-40 xl:md:-top-52 z-50"}/>
                    </div>
                </div>
                <ImageView src={"/assets/images/circleElement%20(1).svg"} alt={"circleElement"} width={90} height={90}
                           classname={"w-10 md:w-14 lg:w-20 absolute left-[46%] top-[11%] lg:top-[18%]"}/>
                <div
                    className="w-16 h-16 sm:w-28 sm:h-28 lg:w-44 lg:h-44 bg-orange-100 rounded-full absolute left-[45%] top-[82%] sm:top-[84%] md:top-[94%] lg:top-[79%] xl:top-[93%]"></div>
            </div>
            <div className="container mx-auto px-4 border-t-2 pt-14 mt-32 sm:mt-48 lg:mt-64">
                <div className="px-4 flex flex-wrap justify-around mx-auto">
                    <div className="mb-10 w-full sm:basis-8/12 md:basis-1/2 xl:basis-2/6">
                        <Logo/>
                        <h3 className="font-bold my-3">
                            Best Car dealer in europe
                        </h3>
                        <p className="mb-3 text-secondary-100 max-w-md">
                            Our dealership is recognized as the best car dealer in Europe, offering an exceptional range
                            of high-quality vehicles. We pride ourselves on providing outstanding service and a seamless
                            buying experience. Trust us to deliver the best cars to you.
                        </p>
                        <SocialMedia/>
                    </div>
                    <div
                        className="mb-12 w-full text-center sm:basis-8/12 md:basis-1/2 xl:basis-2/6 xl:order-4 relative">
                        <h4 className="font-bold mb-5">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-3 -translate-x-3.5">
                            <li className="flex">
                                <ContactBox text={'77 Highfield Road London N36 7SB'}/>
                            </li>
                            <li className="flex">
                                <ContactBox text={'412 444 1124'} link={"tel:+4124441124"}/>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="mb-10 basis-1/2 text-center xl:basis-1/6">*/}
                    {/*    { quickMenuItems && <FooterMenu menuItems={quickMenuItems} title={"Quick Links"}/>}*/}
                    {/*</div>*/}
                    <div className="mb-10 basis-1/2 text-center xl:basis-1/6">
                        <h4 className="font-bold mb-5">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-secondary-100 text-sm lg:text-base">
                            <li>
                                <Link className={'hover:text-primary-100 active:text-primary-100'} href={'/about'}>About us</Link>
                            </li>
                            <li>
                                <Link className={'hover:text-primary-100 active:text-primary-100'} href={'/contact'}>Contact us</Link>
                            </li>
                            <li>
                                <Link className={'hover:text-primary-100 active:text-primary-100'} href={'/products'}>Products</Link>
                            </li>
                            <li className={'hover:text-primary-100 active:text-primary-100 cursor-pointer'} onClick={() => {openModal('login')}}>Login</li>
                            <li onClick={() => {openModal('register')}} className={'hover:text-primary-100 active:text-primary-100 cursor-pointer'}>Register</li>
                        </ul>
                    </div>
                    <div className="mb-20 basis-1/2 text-center xl:basis-1/6">
                        {supportMenuItems && <FooterMenu menuItems={supportMenuItems} title={"Support"}/>}
                    </div>
                </div>
                <p className="text-center text-secondary-50">
                    <span>Mobhil</span> &copy;2020 All Rights Reserved
                </p>
            </div>
        </footer>
    );
}

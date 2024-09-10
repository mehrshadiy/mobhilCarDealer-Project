import React, {Dispatch, SetStateAction, MouseEvent, useEffect} from "react";
import {useMenu} from "@/hooks";
import {ImageView} from "@/components";
import {useUser} from "@/store/AuthContext";
import {useModal} from "@/store/ModalContext";
import {EntityType, MenuItemType, MenuType, ApiResponseType} from "@/types";
import Link from "next/link";

interface Props {
    showMobileMenu: boolean,
    setShowMobileMenu: Dispatch<SetStateAction<boolean>>
    MenuData: ApiResponseType<MenuType>
}

export function Menu({showMobileMenu, setShowMobileMenu, MenuData}: Props) {


    const {data: mainMenuItems} = useMenu({title: 'main menu', MenuData: MenuData})

    const closeMobileMenuHandler = () => {
        setShowMobileMenu(false)
    }

    const menuBodyClickHandler = (e: MouseEvent) => {
        e.stopPropagation()
    }

    const {isLogin, onLogout} = useUser()

    const {openModal} = useModal()

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, [showMobileMenu])

    const accountHandler = () => {
        if (isLogin) {
            onLogout()
        } else {
            openModal('login')
        }
    }

    return (
        <>
            {
                showMobileMenu ? (
                    <div
                        className={`${showMobileMenu ? '? absolute top-0 right-0 left-0 bottom-0 w-full h-screen bg-black bg-opacity-40 z-[900]' : 'lg:hidden'}`}>
                        <ul onClick={menuBodyClickHandler}
                            className={`${showMobileMenu ? 'translate-x-0 fixed overflow-y-scroll' : '-translate-x-full absolute'} bg-[#fff] text-secondary-400 font-semibold z-[9999] left-0 top-0 w-full h-screen py-5 px-4 sm:w-8/12 lg:translate-x-0 lg:relative lg:flex lg:bg-transparent lg:w-fit lg:gap-4 lg:p-0 lg:h-fit 2xl:gap-7`}>
                            <li className="lg:hidden mb-28">
                                <ImageView src={"/assets/images/wave3.png"} alt={'wavebg'} width={1800} height={612}
                                           classname={'absolute top-0 right-0 left-0 max-h-52 min-h-40'}/>
                                <button onClick={closeMobileMenuHandler}
                                        className="relative text-white border-2 rounded-2xl py-2 px-4 hover:bg-gray-200 hover:text-black">X
                                </button>
                            </li>
                            {
                                mainMenuItems &&
                                mainMenuItems?.data.map((item: EntityType<MenuItemType>, index: number) => {
                                    return (
                                        <div key={index}>
                                            <li className={`border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100 pt-10 lg:pt-9 lg:pb-7 hover:text-primary-100`}
                                                onClick={closeMobileMenuHandler}>
                                                <Link href={item.attributes.link}>{item.attributes.title}</Link>
                                            </li>
                                            <div className={'w-1/3 h-[1px] bg-linear-line'}></div>
                                        </div>
                                    )
                                })
                            }
                            <li className={'cursor-pointer text-secondary-400 font-semibold flex items-center gap-2 pt-10 lg:pt-9 lg:pb-7 hover:text-primary-100'}
                                onClick={accountHandler}>
                                <ImageView src={'/assets/images/logout.svg'} alt={'logoutIcon'} width={22}
                                           height={22}/>
                                {
                                    isLogin ? 'Logout' : 'Login / Register'
                                }
                            </li>
                        </ul>
                    </div>
                ) : (
                    <ul className={`hidden lg:flex text-secondary-400 font-semibold py-5 px-4 lg:relative lg:bg-transparent lg:w-fit lg:gap-4 lg:p-0 lg:h-fit 2xl:gap-7`}>
                        {
                            mainMenuItems &&
                            mainMenuItems?.data.map((item: EntityType<MenuItemType>, index: number) => {
                                return (
                                    <li key={index}
                                        className={`border-b-4 border-transparent lg:text-sm 2xl:text-base lg:hover:border-primary-100  pt-10 lg:pt-9 lg:pb-7 hover:text-primary-100`}>
                                        <Link href={item.attributes.link}>{item.attributes.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </>
    );
}
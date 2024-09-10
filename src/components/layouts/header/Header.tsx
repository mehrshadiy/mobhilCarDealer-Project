import {ImageView, LoginModal, Logo, Menu, RegisterModal} from "@/components";
import {useState, MouseEvent} from "react";
import {useOverlay} from "@/hooks";
import {useUser} from "@/store/AuthContext";
import {useModal} from "@/store/ModalContext";
import {ApiResponseType, MenuType} from "@/types";
import Select, {StylesConfig} from "react-select";

interface Props {
    MenuData: ApiResponseType<MenuType>
}

export function Header({MenuData}: Props) {
    const [showMobileMenu,setShowMobileMenu] = useState(false)

    useOverlay({
        onClick: () => {
            setShowMobileMenu(false)
        }
    })

    const {isLogin, onLogout} = useUser()
    const {openModal, currentModal} = useModal()

    const showMobileMenuHandler =(e: MouseEvent)=>{
        e.stopPropagation()
        setShowMobileMenu((prevState)=> !prevState)
    }

    const accountHandler = ()=>{
        if (isLogin){
            onLogout()
        }else {
            openModal('login')
        }
    }

    const options = [
        { value: 'EN', label: 'EN' },
        { value: 'Fa', label: 'Fa' }
    ];

    const SelectStyles: StylesConfig<any, false> = {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            minWidth: '83px'
        }),
    };

    return (
        <header className="shadow-5xl">
            {currentModal === 'login' && <LoginModal/>}
            {currentModal === 'register' && <RegisterModal/>}
            <div className="container mx-auto px-4 py-6 lg:py-0">
                <div className="flex justify-between items-center lg:items-start">
                    <Logo/>
                    <nav className="order-3 lg:order-2 h-full ml-2 lg:ml-0">
                        <button onClick={showMobileMenuHandler}
                                className="flex flex-col justify-between h-[43px] px-[10px] py-[11px] lg:hidden border-2 border-White-200 rounded-lg text-center hover:bg-White-200 hover:shadow-lg">
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                            <span className="w-[24px] h-[1.5px] bg-secondary-400 inline-block rounded"></span>
                        </button>
                        <Menu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} MenuData={MenuData}/>
                    </nav>
                    <div className="order-2 lg:order-3 text-xs lg:text-sm 2xl:text-base lg:flex lg:items-center xl:w-fit xl:h-fit lg:gap-3 lg:pt-6">
                        <div className={'hidden cursor-pointer text-secondary-400 font-semibold lg:flex items-center gap-2'} onClick={accountHandler}>
                            <ImageView src={'/assets/images/logout.svg'} alt={'logoutIcon'} width={22} height={22}/>
                            {
                                isLogin ? 'Logout' : 'Login / Register'
                            }
                        </div>
                        <Select
                            options={options}
                            placeholder="EN"
                            className={'z-10'}
                            styles={SelectStyles}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

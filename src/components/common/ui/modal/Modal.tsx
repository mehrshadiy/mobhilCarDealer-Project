import {ReactNode} from "react";
import {ImageView, Portal} from "@/components";
import {useModal} from "@/store/ModalContext";

interface Props {
    children: ReactNode
    title: string
}

export function Modal({title, children}: Props) {

    const {closeModal} = useModal()

    return (
        <Portal onClose={closeModal}>
            <div className={'min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] bg-white overflow-auto md:rounded-xl'}>
                <div className={'flex flex-row justify-between items-center bg-primary-100 text-white text-xl font-bold py-5 px-11'}>
                    {title}
                    <div onClick={closeModal} className={'cursor-pointer'}>
                        <ImageView src={'/assets/images/icon-close.svg'} alt={'closeIcon'} width={35} height={35}/>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
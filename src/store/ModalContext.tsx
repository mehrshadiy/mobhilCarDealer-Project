import {createContext, ReactNode, useContext, useState} from "react";

interface Props {
    children: ReactNode
}

type modalType = null | 'login' | 'register'

interface ModalContextType {
    currentModal: modalType
    openModal: (modalName : modalType) => void
    closeModal: () => void

}

const ModalContext = createContext<ModalContextType>({
    currentModal: null,
    openModal: ()=> {},
    closeModal: () => {}
})

export const useModal = () => useContext(ModalContext)

export function ModalContextProvider( {children}: Props) {
    const [showModal, setShowModal] = useState<modalType>(null)

    const closeModalHandler = () => {
        setShowModal(null)
    }

    const openModalHandler = (modalName : modalType) => {
        setShowModal(modalName)
    }

    return(
        <ModalContext.Provider value={{currentModal: showModal, closeModal: closeModalHandler, openModal: openModalHandler}}>
            {children}
        </ModalContext.Provider>
    )
}
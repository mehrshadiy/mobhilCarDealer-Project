import {createPortal} from "react-dom";
import {ReactNode, useEffect} from "react";

interface Props {
    children: ReactNode
    onClose: () => void
}


export function Portal({children, onClose}: Props) {

    useEffect(() => {
        document.body.style.overflowY = 'hidden'
        return ()=>{
            document.body.style.overflowY = 'auto'
        }
    }, []);

    return createPortal(
        <div onClick={onClose} className={'fixed top-0 right-0 left-0 bottom-0 bg-black z-[9999999] bg-opacity-60 flex justify-center items-center'}>
            <div onClick={(e)=>{e.stopPropagation()}}>
                {children}
            </div>
        </div>,
        document.getElementById('portal')!
    );
}
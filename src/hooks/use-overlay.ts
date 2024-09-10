import {useEffect} from "react";

interface Prop {
    onClick : () => void
}
export function useOverlay({onClick}: Prop) {
    useEffect(()=>{
        const closeHandler = ()=> onClick()
        document.addEventListener('click', closeHandler)
        return ()=>{
            document.removeEventListener('click', closeHandler)
        }
    },[])
}
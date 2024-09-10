import { ProductsListCard} from "@/components";
import {ApiResponseType, CarsType} from "@/types";
import {useEffect} from "react";
interface Props {
    data : ApiResponseType<CarsType>
}
export function ProductsList({data}: Props) {


    useEffect(()=>{
    },[])

    return (
                 <div className="flex flex-wrap gap-x-4 gap-y-9 mt-10 justify-center items-center" >

                {
                    data && 
                    data.data.map((value, index)=>{
                        return(
                        <ProductsListCard className={'block'} key={index} data={value}/>
                        )
                    })
                }

            </div>
    )
}
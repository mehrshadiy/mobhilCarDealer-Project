import {apiClient} from "@/api/config";
import {ApiSingleResponseType, CarsType} from "@/types";

interface Interface {
    id: number | string[] | undefined | string
    populate?: Array<'thumbnail' | 'car_class' | "car_model" | 'gallery' | '*'>
}

export function getOneCarApi({id,populate}: Interface): Promise<ApiSingleResponseType<CarsType>> {
    return apiClient.get(`/cars/${id}`,
        {
            params: {
                populate: populate?.join(','),
            }
        }

    )
}
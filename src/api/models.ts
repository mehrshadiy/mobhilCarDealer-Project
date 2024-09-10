import {apiClient} from "@/api/config";
import {ApiResponseType, CarSpecificsType} from "@/types";

interface Interface {
    populate?: Array<'thumbnail' | '*'>
    filters?: {}
    sort?: Array<string>
    pagination?: {
        withCount?: boolean
        page?: number
        pageSize?: number
        start?: number
        limit?: number
    }
}

export function getAllModelsApi({populate, filters = {}, sort = [], pagination = {}}: Interface): Promise<ApiResponseType<CarSpecificsType>> {
    return apiClient.get('/car-models', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}
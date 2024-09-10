import {apiClient} from "@/api/config";
import {ApiResponseType, ServicesType} from "@/types";

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

export function getAllServicesApi({populate, filters = {}, sort = [], pagination = {}}: Interface): Promise<ApiResponseType<ServicesType>> {
    return apiClient.get('/services', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}
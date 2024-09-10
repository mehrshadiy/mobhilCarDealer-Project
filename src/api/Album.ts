import {apiClient} from "@/api";
import {ApiResponseType} from "@/types";
import {AlbumType} from "@/types/Album";

interface Interface {
    populate?: Array<'*'>
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

export function getAllAlbumsApi({populate, filters = {}, sort = [], pagination = {}}: Interface): Promise<ApiResponseType<AlbumType>> {
    return apiClient.get('/albums', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}
import {apiClient} from "@/api/config";
import {ApiResponseType} from "@/types";
import {TeamMemberType} from "@/types/TeamMember";

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

export function getAllTeamMembersApi({populate, filters = {}, sort = [], pagination = {}}: Interface): Promise<ApiResponseType<TeamMemberType>> {
    return apiClient.get('/team-members', {
        params: {
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}
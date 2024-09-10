import {apiClient} from "@/api/config";
import {ApiResponseType} from "@/types/Response";
import {LocationType} from "@/types/Location";

export async function getLocationApiCall():Promise<ApiResponseType<LocationType>> {
    return await apiClient.get('/branches')
}
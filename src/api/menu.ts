import {apiClient} from "@/api/config";
import {ApiResponseType, MenuType} from "@/types";

export async function getMenusApiCall() : Promise<ApiResponseType<MenuType>> {
    return await apiClient.get('/menus',{
        params:{
            populate: "*"
        }
    })
}
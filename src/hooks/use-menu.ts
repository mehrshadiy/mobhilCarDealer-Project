import {useQuery} from "@tanstack/react-query";
import {ApiResponseType, EntityType, MenuType, PopulateType} from "@/types";
import {getMenusApiCall} from "@/api/menu";
import {MenuItemType} from "@/types/MenuItem";


interface Prop {
    title: string
    MenuData?: ApiResponseType<MenuType>
}

export function useMenu({title, MenuData}: Prop) {

    const {data: menusData} = useQuery<ApiResponseType<MenuType>>({
        queryKey: [getMenusApiCall.name],
        queryFn: getMenusApiCall,
        initialData: MenuData
    })

    let MenuItems: PopulateType<MenuItemType> | null = null
    if (menusData) {
        const findMenu = menusData.data.filter((item: EntityType<MenuType>) => item.attributes.title === title);

        if (findMenu) {
            MenuItems = findMenu[0].attributes.menu_items
            MenuItems.data.sort((a, b) => {
                if (a.attributes.rank > b.attributes.rank)
                    return 1;
                if (a.attributes.rank < b.attributes.rank)
                    return -1;
                return 0
            })
        }
    }
    return {data: MenuItems}
}


// export function useMenu({title}: Prop) {
//
//     const initialData = fetchMenuData()
//
//     const {data: menusData} = useQuery<ApiResponseType<MenuType>>({
//         queryKey: [getMenusApiCall.name],
//         queryFn: () => getMenusApiCall(),
//         initialData: initialData,
//         staleTime: 0,
//     });
//
//     let MenuItems: PopulateType<MenuItemType> | null = null
//
//     if (menusData) {
//         const findMenu = menusData.data.filter((item: EntityType<MenuType>) => item.attributes.title === title);
//
//         if (findMenu) {
//             MenuItems = findMenu[0].attributes.menu_items
//             MenuItems.data.sort((a, b) => {
//                 if (a.attributes.rank > b.attributes.rank)
//                     return 1;
//                 if (a.attributes.rank < b.attributes.rank)
//                     return -1;
//                 return 0
//             })
//         }
//     }
//     return {data: MenuItems}
// }
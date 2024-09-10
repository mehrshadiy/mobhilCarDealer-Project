import {PopulateType, MenuItemType} from "@/types";

export interface MenuType {
    title: string
    createdAt: string
    updatedAt: string
    position: string
    menu_items: PopulateType<MenuItemType>
}
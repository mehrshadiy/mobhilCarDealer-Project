import {ImageType} from "@/types";

export interface AlbumType {
    title: string
    createdAt: string
    updatedAt: string
    Images: Images
}

interface Images {
    data: Array<data>
}

interface data {
    id: number
    attributes: ImageType
}
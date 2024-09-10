import {ImageType} from "@/types";

export interface TeamMemberType {
    title: string
    createdAt: string
    updatedAt: string
    image: Image
}

interface Image {
    data: data
}

interface data {
    id: number
    attributes: ImageType
}
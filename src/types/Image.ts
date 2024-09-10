import {ImageFormatType} from "@/types";

export interface ImageType {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: {
        thumbnail: ImageFormatType
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}
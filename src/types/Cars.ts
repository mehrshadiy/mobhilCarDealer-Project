import {EntityType, PopulateType, ImageType, CarSpecificsType, FuelTransitionType} from "@/types";
import {FeaturesType} from "@/types/Features";

export interface CarsType {
    excerpt: string
    price: number
    passenger: number
    description: string
    rate: number
    createdAt: string
    updatedAt: string
    dealCount?: string
    title: string
    features: FeaturesType[]
    Trending: boolean
    thumbnail: {
        data: EntityType<ImageType>
    }
    gallery: PopulateType<ImageType>
    car_model: {
        data: EntityType<CarSpecificsType> }
    car_type: EntityType<CarSpecificsType>
    car_class: {
        data: EntityType<CarSpecificsType>
    }
    car_brand: {
        data: EntityType<CarSpecificsType>
    }
    fuels?: PopulateType<FuelTransitionType> | undefined
    transitions?: PopulateType<FuelTransitionType> | undefined
}
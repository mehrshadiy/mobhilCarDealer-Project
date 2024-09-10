import {CarsType, PopulateType} from "@/types";

export interface FuelTransitionType {
    type: string
    createdAt: string
    updatedAt: string
    cars: PopulateType<CarsType>
}
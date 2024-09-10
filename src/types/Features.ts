export interface FeaturesType {
    type: string
    format: string
    children: Children[]
}

export interface Children {
    type: string
    children: Children2[]
}

export interface Children2 {
    type: string
    text: string
}
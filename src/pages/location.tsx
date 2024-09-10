import {Branches, HeroSection, Map, Section} from "@/components";
import {getLocationApiCall} from "@/api";
import {ApiResponseType, LocationType} from "@/types";
import { useQuery} from "@tanstack/react-query";

export default function Location() {

    const {data: locationData} = useQuery<ApiResponseType<LocationType>>({
        queryKey: [getLocationApiCall.name, 'locationData'],
        queryFn: () => getLocationApiCall()
    })

    return (
        <>
            <HeroSection title={"Dealer Locations"} backGround={'bg-location-banner'}/>
            <Section className={'pt-14 lg:pt-24'}>
                <Map/>
                {locationData && <Branches data={locationData.data}/>}
            </Section>
        </>
    )
}

// export async function getStaticProps() {
//     const queryClient = new QueryClient()
//
//     await queryClient.prefetchQuery({
//         queryKey: [getLocationApiCall.name, 'locationData'],
//         queryFn: () => getLocationApiCall()
//     })
//
//     return{props: {dehydratedStates: dehydrate(queryClient)}}
// }



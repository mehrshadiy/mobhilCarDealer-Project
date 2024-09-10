import Link from "next/link";
import dynamic from "next/dynamic";
import {
    MiniFilter,
    Section,
    ImageView,
    ServicesList, IconBox, VerticalSlider, Loading
} from "@/components";
import { useQuery} from "@tanstack/react-query";
import {getAllAlbumsApi, getAllCarsApi, getAllServicesApi} from "@/api";
import {AlbumType, ApiResponseType, CarsType, ServicesType} from "@/types";

const TrendingSlider = dynamic(() =>
    import('@/components').then((value) => value.TrendingSlider), {ssr: false}
)
const PaginatedSlider = dynamic(() =>
    import('@/components').then((value) => value.PaginatedSlider), {ssr: false}
)


export default function Home() {


    const {data: trendingCarData, isPending: trendingCarPending} = useQuery<ApiResponseType<CarsType>>(
        {
            queryKey: [getAllCarsApi.name, 'trendingCarData'],
            queryFn: () => getAllCarsApi({
                populate: ['thumbnail', 'car_class', 'car_model'],
                filters: {
                    Trending: {
                        $eq: true
                    }
                },
                pagination: {
                    pageSize: 5
                }
            })
        }
    )

    const {data: servicesData, isPending: servicesPending} = useQuery<ApiResponseType<ServicesType>>(
        {
            queryKey: [getAllServicesApi.name, '3 of'],
            queryFn: () => getAllServicesApi({
                populate: ['*'],
                pagination: {
                    pageSize: 3
                }
            })
        })

    const {data: ClassicAlbumData, isPending: AlbumPending} = useQuery<ApiResponseType<AlbumType>>(
        {
            queryKey: [getAllAlbumsApi.name, 'ClassicAlbum'],
            queryFn: () => getAllAlbumsApi({
                populate: ['*'],
                filters: {
                    title: {$eq: 'classicCars'}
                }
            })
        })


    const {data: SportAlbumData, isPending: SportAlbumPending} = useQuery<ApiResponseType<AlbumType>>(
        {
            queryKey: [getAllAlbumsApi.name, 'sportAlbum'],
            queryFn: () => getAllAlbumsApi({
                populate: ['*'],
                filters: {
                    title: {$eq: 'sportCars'}
                }
            })
        })


    return (
        <>
            <div className="absolute right-0 lg:order-2 self-end lg:self-start w-10/12 lg:w-2/4">
                {
                    trendingCarPending ?
                        <Loading/>
                        :
                    trendingCarData &&
                    <TrendingSlider sliderData={trendingCarData} nextEl={".swiper-button-next"}
                                    prevEl={".swiper-button-prev"}/>
                }
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
            <Section>
                <div className="flex flex-col lg:flex-row container mx-auto px-4">
                    <ImageView src="/assets/images/circleElement.svg" alt=""
                               classname="absolute w-auto h-auto top-[60px] right-[85%] lg:right-[52%]" height={66}
                               width={50}/>
                    <div className="w-full lg:w-2/4 lg:order-1 pt-[400px] lg:pt-28 xl:pt-20">
                        <div className="w-full sm:w-96 h-12 text-xs sm:text-sm bg-White-300 rounded-[44px] relative">
                            <button
                                className="h-4/5 absolute left-2.5 my-auto top-0 bottom-0 px-6 bg-orange-100 rounded-[44px] text-white font-bold">
                                TRENDING
                            </button>
                            {
                                trendingCarData &&
                                <Link href={`/product/${trendingCarData.data[0].id}`}
                                      className="w-full h-full pl-44 bg-transparent outline-none pr-8 text-center flex flex-col justify-center text-nowrap sm:text-lg font-bold hover:bg-yellow-100 rounded-full">
                                    {trendingCarData.data[0].attributes.title}
                                </Link>
                            }
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl pr-2 sm:w-[500px] xl:w-[620px] font-bold sm:leading-[58px] xl:leading-[70px] pt-7 lg:pt-11">
                                Say hello to best car dealer platform</h1>
                            <p className="text-sm md:w-10/12 leading-6 sm:leading-7 mt-3">
                                Experience unparalleled car buying and selling with a wide variety and reliable services
                                at <span className={'font-semibold text-md'}>Mobhil Car Dealer</span>. Discover the best
                                car deals and benefit from professional services with Us.
                            </p>
                        </div>
                        <MiniFilter className={'mb-10'}/>
                    </div>
                </div>
            </Section>
            <ImageView height={2134} width={1600}
                       classname={"w-10/12 lg:w-2/5 h-[400px] lg:h-[790px] absolute left-0 -z-10 rounded-br-[100px] rounded-tr-[100px] object-cover object-center"}
                       src="/assets/images/robin-vet-q6LFMQ6wVZ0-unsplash1.jpg" alt="classNameic car"/>
            <Section>
                <div className="flex flex-col lg:items-end gap-9 2xl:gap-16">
                    <div
                        className="sm:w-11/12 lg:w-[70%] order-1 lg:order-2 flex flex-row pt-80 lg:pt-0 gap-2.5 sm:gap-5 justify-between self-end 2xl:pr-24">
                        {
                            servicesPending ?
                                <Loading/>
                                :

                            servicesData &&

                            <ServicesList data={servicesData}/>
                        }
                    </div>
                    <div className="w-full lg:w-3/5 order-2 lg:order-1 lg:pl-16">
                        <h2 className="text-base md:text-lg text-primary-100 font-semibold tracking-[9px] md:pt-8 lg:pt-16">
                            ABOUT
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold pt-3 md:pt-5">
                            About the Mobhil
                        </h3>
                        <p className="text-xs md:text-sm xl:text-lg pr-5 leading-[21px] xl:leading-8 pt-6 md:pt-8 xl:pt-10 lg:w-4/5">
                            We have implemented this platform to provide better and more convenient services for both
                            buyers and sellers. Here, you can easily find car buyers and sellers at any location. With a
                            wide variety of cars and the provision of high-quality, reliable services, we ensure your
                            experience here is exceptional.</p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 items-center">
                    <ImageView src="/assets/images/circleElement.svg" alt="" width={66} height={50}
                               classname="w-[50px] absolute left-0 md:left-16 lg:left-2/4 xl:left-[51%] 2xl:left-[53%] lg:top-80 top-40 z-50"/>
                    <div className="w-full lg:basis-1/2 order-2 lg:order-1 pt-9">
                        <h3 className="text-xs lg:text-sm xl:text-xl text-secondary-200 font-semibold">
                            We Bring You to The Future
                        </h3>
                        <h3 className="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-3 md:mt-[14px]">
                            Don’t worries, <br/>
                            we check all of unit
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg 2xl:w-[90%] lg:leading-8 mt-3 md:mt-[14px] lg:mt-[20px] xl:mt-[30px]">
                            In Mobhil Car Dealer, we are dedicated to innovation and progress. Without any concerns, we
                            meticulously inspect every unit to ensure quality and reliability for you.
                        </p>
                        <Link href={'/about'}
                              className="inline-block px-4 xl:px-9 py-[12px] xl:py-[18px] text-sm md:text-base xl:text-lg font-medium rounded-[7px] bg-primary-100 text-white mt-6 lg:mt-9">
                            Discover More
                        </Link>
                    </div>
                    <div className="w-full lg:basis-1/2 order-1 lg:order-2 h-56 sm:h-72 lg:h-96 2xl:pr-12">
                        {
                            AlbumPending ?
                                <Loading/>
                                :

                                ClassicAlbumData &&
                            <VerticalSlider data={ClassicAlbumData}
                                            sliderClass={'max-w-xl lg:w-full rounded-[60px]'}/>
                        }
                    </div>
                </div>
            </Section>

            <Section className={"flex flex-col items-center"}>
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
                    Top deals of the week
                </h2>
                <p className="max-w-xl lg:max-w-3xl text-sm lg:text-lg leading-6 xl:leading-8 text-center pt-2 md:pt-5">
                    Discover exclusive offers and unbeatable prices on our top vehicles this week. Don't miss out on
                    these exceptional opportunities to find your dream car.
                </p>
                <div className="h-fit w-4/5 sm:w-full 2xl:max-w-7xl pt-10">
                    <PaginatedSlider/>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 items-center">
                    <ImageView height={66} width={50} src="/assets/images/circleElement.svg" alt=""
                               classname="w-[50px] absolute left-0 md:left-16 2xl:left-[70px] lg:left-0 top-32 lg:top-60 z-50"/>
                    <div className="w-full lg:basis-1/2 h-56 sm:h-72 lg:h-96">
                        {
                            SportAlbumPending ?
                                <Loading/>
                                :

                            SportAlbumData &&
                            <VerticalSlider data={SportAlbumData}
                                            sliderClass={'max-w-xl lg:w-full rounded-[60px]'}/>
                        }
                    </div>
                    <div className="w-full lg:basis-1/2 pt-9">
                        <h2 className="text-sm lg:text-sm xl:text-xl text-secondary-200 font-semibold">
                            Best Car in The World
                        </h2>
                        <h3 className="font-bold text-[30px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] mt-3 md:mt-[14px]">
                            We serve you with<br/>
                            best car in the world
                        </h3>
                        <p className="text-sm sm:text-sm lg:text-base 2xl:text-lg 2xl:w-[90%] lg:leading-8 mt-3 md:mt-[14px] lg:mt-[20px] xl:mt-[30px]">
                            We are committed to providing you with the highest level of automotive excellence. Through
                            careful selection and meticulous quality inspection, we ensure that each vehicle meets our
                            high standards. With our unparalleled experience, our outstanding cars exceed your
                            expectations.
                        </p>
                        <Link href={'/about'} className={'flex items-center mt-4 gap-3'}>
                            <div
                                className={'w-[70px] h-[70px] border border-secondary-20 rounded-full flex justify-center items-center'}>
                                <div
                                    className={'w-[46px] h-[46px] bg-primary-100 rounded-full flex justify-center items-center'}>
                                    <IconBox icon={'icon-play text-white'} size={22}/>
                                </div>
                            </div>
                            <span className={'text-secondary-300 underline text-md'}>Learn more</span>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}



// export async function getStaticProps() {
//
//     const queryClient = new QueryClient()
//
//
//     await queryClient.prefetchQuery({
//         queryKey: [getAllServicesApi.name, '3 of'],
//         queryFn: () => getAllServicesApi({
//             populate: ['*'],
//             pagination: {
//                 pageSize: 3
//             }
//         })
//     })
//
//     await queryClient.prefetchQuery({
//         queryKey: [getAllAlbumsApi.name, 'ClassicAlbum'],
//         queryFn: () => getAllAlbumsApi({
//             populate: ['*'],
//             filters: {
//                 title: {$eq: 'classicCars'}
//             }
//         })
//     })
//
//     await queryClient.prefetchQuery({
//         queryKey: [getAllAlbumsApi.name, 'sportAlbum'],
//         queryFn: () => getAllAlbumsApi({
//             populate: ['*'],
//             filters: {
//                 title: {$eq: 'sportCars'}
//             }
//         })
//     })
//
//     return {props: {dehydratedState: dehydrate(queryClient)}}
// }
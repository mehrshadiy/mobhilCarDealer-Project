import {Filter, HeroSection, Paginate, ProductsList, Section} from "@/components";
import { useMutation} from "@tanstack/react-query";
import {getAllCarsApi} from "@/api";
import {MouseEvent, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {ParsedUrlQueryInput} from "node:querystring";
import {Loading} from "@/components/common/ui/loading/Loading";
import Select from 'react-select';

interface ObjFilter {
    title?: object,
    car_class?: object,
    fuel?: object,
    transition?: object
}

export default function Products() {


    const [mobileFilter, setMobileFilter] = useState(false)

    // const {data: carsData} = useQuery<ApiResponseType<CarsType>>(
    //     {
    //         queryKey: [getAllCarsApi.name],
    //         queryFn: () => getAllCarsApi({
    //             populate: [
    //                 'thumbnail',
    //                 'car_class',
    //                 'car_model',
    //                 'transitions',
    //                 'fuels'
    //             ],
    //             pagination: {
    //                 pageSize: 10
    //             }
    //         })
    //     }
    // )


    const mutation = useMutation({
        mutationFn: (filter: ParsedUrlQueryInput) => {
            const objFilter: ObjFilter = {}

            if (filter.carBrand && filter.carBrand?.toString().length > 0) {
                objFilter['title'] = {
                    $containsi: `${filter.carBrand}`
                }
            }
            if (filter.carClass && filter.carClass?.toString().length > 0) {
                objFilter['car_class'] = {
                    title: {
                        $eq: `${filter.carClass}`
                    }
                }
            }
            if (filter.carFuel && filter.carFuel?.toString().length > 0) {
                objFilter['fuel'] = {
                    title: {
                        $containsi: `${filter.carFuel}`
                    }
                }
            }
            if (filter.carTransmission && filter.carTransmission?.toString().length > 0) {
                objFilter['transition'] = {
                    title: {
                        $containsi: `${filter.carTransmission}`
                    }
                }
            }

            return getAllCarsApi({
                populate: [
                    'thumbnail',
                    'car_class',
                    'car_model',
                    'transition',
                    'fuel'
                ],
                filters: objFilter,
                pagination: {
                    pageSize: 9,
                    page: pageState
                }
            },)
        }
    })


    const [pageState, setPageState] = useState(1)

    const {query} = useRouter()

    useEffect(() => {
        mutation.mutate(query)
    }, [query, pageState])

    const showFilterHandler = (e: MouseEvent) => {
        e.stopPropagation()
        setMobileFilter(true)
    }

    const options = [
        {value: 'Newest', label: 'Newest'},
        {value: 'Ascending', label: 'Ascending'},
        {value: 'Descending', label: 'Descending'},
    ]

    return (
        <>
            <HeroSection title={'Car Collections'} backGround={'bg-collection-banner'}/>
            <Section className="flex justify-between">
                <Filter mobileFilter={mobileFilter} setMobileFilter={setMobileFilter}/>
                <div className="w-full md:basis-4/5">
                    <div className={'flex gap-2 mt-4 items-center cursor-pointer md:hidden'} onClick={showFilterHandler}>
                        <button className="flex flex-col gap-1 lg:hidden text-center  hover:shadow-lg">
                            <span className="w-[18px] h-[1px] bg-secondary-50 inline-block rounded"></span>
                            <span className="w-[18px] h-[1px] bg-secondary-50 inline-block rounded"></span>
                            <span className="w-[18px] h-[1px] bg-secondary-50 inline-block rounded"></span>
                        </button>
                        <span className={'text-secondary-50 font-bold'}>FILTER</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 md:justify-between pt-5 lg:pt-28 lg:items-center md:ml-5">
                        <h3 className="text-secondary-50">
                            Showing
                            <span className="font-bold mx-2">
                                {
                                    mutation.data &&
                                    <>
                                        {mutation.data?.data.length} product
                                        from {mutation.data.meta.pagination.total}
                                    </>
                                }
                        </span>
                        </h3>
                        <div>
                            <label className="text-secondary-50 flex gap-3 items-center">
                                Sort by
                                <Select className="min-w-[147px] bg-white rounded-lg text-sm font-bold z-[60]" options={options} defaultValue={options[0]}/>
                            </label>
                        </div>
                    </div>
                    {
                        mutation.isPending ?
                            <Loading/>
                            :
                            mutation.data == null ?
                                <div
                                    className="flex justify-center items-center mt-24 col-span-2 2xl:col-span-3 text-secondary-400 text-3xl font-bold">No
                                    product found !</div>
                                :
                                mutation.data &&
                                <ProductsList data={mutation.data}/>
                    }
                    {
                        mutation.data &&
                        <Paginate data={mutation.data.meta} pageSetter={setPageState}/>
                    }
                </div>
            </Section>
        </>
    )
}
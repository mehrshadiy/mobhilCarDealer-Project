import { FilterSelect, IconBox, ImageView } from "@/components";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ApiResponseType, CarSpecificsType, CarsType, EntityType } from "@/types";
import { getAllBrandsApi, getAllCarsApi, getAllClassesApi } from "@/api";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { getAllFuelsApi } from "@/api/fuels";
import { getAllTransitionsApi } from "@/api/transitions";
import { useRouter } from "next/router";
import { useEffect, MouseEvent, Dispatch, SetStateAction, useState } from "react";
import useDebounce from "@/hooks/use-debounce";
import { useOverlay } from "@/hooks";
import Link from "next/link";
import {Loading} from "@/components/common/ui/loading/Loading";

interface Props {
    mobileFilter: boolean
    setMobileFilter: Dispatch<SetStateAction<boolean>>
}

interface FormInput {
    carSearch: string
}

interface FilterData {
    title: {
        $containsi: string
    }
}

export function Filter({ mobileFilter, setMobileFilter }: Props) {
    const [searchData, setSearchData] = useState<Array<EntityType<CarsType>>>();

    const router = useRouter();

    const { mutate, isPending } = useMutation({
        mutationFn: (data: FilterData) => getAllCarsApi({
            filters: data
        })
    });

    const { data: brandsData } = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllBrandsApi({}),
        queryKey: [getAllBrandsApi.name]
    });

    const { data: classesData } = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllClassesApi({}),
        queryKey: [getAllClassesApi.name]
    });

    const { data: fuelsData } = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllFuelsApi({}),
        queryKey: [getAllFuelsApi.name]
    });

    const { data: transitionsData } = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllTransitionsApi({}),
        queryKey: [getAllTransitionsApi.name]
    });

    const searchForm = useForm<FormInput>();
    const filterForm = useForm<{
        carBrand: string;
        carClass: string;
        carFuel: string;
        carTransmission: string;
    }>();

    const submitHandler = (filterData: any) => {
        let filter = {
            carBrand: filterData.carBrand,
            carClass: filterData.carClass,
            carFuel: filterData.carFuel,
            carTransmission: filterData.carTransmission
        };
        router.replace({ pathname: '/products', query: filter }, undefined, { scroll: false });
    };

    const onsubmit = (searchData: FormInput) => {
        if (searchData.carSearch.length <= 1) return;

        mutate({
            title: {
                '$containsi': searchData.carSearch
            }
        }, {
            onSuccess: (response) => setSearchData(response.data)
        });
    };

    const carSearch = searchForm.watch('carSearch');

    useEffect(() => {
        if (carSearch) {
            delay();
        } else {
            setSearchData([]);
        }
    }, [carSearch]);

    const delay = useDebounce(searchForm.handleSubmit(onsubmit), 1000);

    const closeFilterHandler = () => {
        setMobileFilter(false);
    };

    const filterBodyHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        document.body.style.overflowY = mobileFilter ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [mobileFilter]);

    useOverlay({
        onClick: () => {
            setMobileFilter(false);
        }
    });

    return (
        <aside>
            <nav className="pt-5 lg:pt-20">
                <div onClick={filterBodyHandler}
                     className={`${mobileFilter ? 'translate-x-0 fixed overflow-y-auto' : '-translate-x-full fixed'} bg-[#fff] text-secondary-400 font-semibold z-[99] left-0 top-0 w-full sm:w-8/12 md:w-full h-screen md:h-full py-5 px-4 md:translate-x-0 md:relative md:bg-transparent md:gap-4 md:p-0`}>
                    <div className="md:hidden">
                        <ImageView src={'/assets/images/filterWave.png'} alt={'filterWave'} width={1000} height={400}
                                   classname={'absolute top-0 right-0 left-0'} />
                        <button className="relative text-white border-2 rounded-2xl py-2 px-4 hover:bg-gray-200 hover:text-black" onClick={closeFilterHandler}>
                            X
                        </button>
                    </div>
                    <div className="max-w-xs md:w-full xl:max-w-56 pb-10 px-3">
                        <h2 className="uppercase font-bold text-4xl pt-32 md:pt-5">
                            Filter
                        </h2>
                        <h3 className="text-secondary-50 pt-1">
                            Search your car
                        </h3>

                        <div className={'relative'}>
                            <form autoComplete={'off'} className="flex items-center w-full" onSubmit={searchForm.handleSubmit(onsubmit)}>
                                <div className="h-10 w-full relative mt-10 bg-white border border-White-100 rounded hover:border px-3">
                                    <input className="search-input h-full w-full outline-none bg-transparent font-normal"
                                           type="text"
                                           placeholder="Search here..." {...searchForm.register('carSearch')} />
                                    <IconBox icon={'icon-search text-xl text-secondary-10 absolute right-5 top-[6px]'} />
                                </div>
                            </form>

                            {
                                isPending ?
                                    <Loading className={'absolute rounded-lg bg-gray-500 w-max z-50 ml-1 left-0 md:left-full top-20 md:top-10 text-center'}/>
                                    :
                                searchData &&
                                <div className={'absolute rounded-lg bg-gray-500 w-full md:w-max z-50 left-0 md:left-full top-20 md:top-10 mt-1 md:mt-0 md:ml-1 text-center'}>
                                    <ul>
                                        {
                                            searchData.map((item: EntityType<CarsType>) => (
                                                <li
                                                    key={item.id}
                                                    className={'px-4 py-2 m-2 text-sm bg-gray-200 rounded-2xl hover:bg-primary-70 hover:text-white hover:cursor-pointer'}>
                                                    <Link href={`/product/${item.id}`}>
                                                        {item.attributes.title}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            }
                        </div>

                        <FormProvider {...filterForm}>
                            <form action="" onSubmit={filterForm.handleSubmit(submitHandler)}>
                                {brandsData &&
                                    <Controller
                                        name="carBrand"
                                        control={filterForm.control}
                                        defaultValue={`${router.query.carBrand ? router.query.carBrand : ''}`}
                                        render={({ field }) => (
                                            <FilterSelect
                                                data={brandsData}
                                                queryKey={'carBrand'}
                                                placeholder={'Choose Brand'}
                                                label={'Choose Brand'}
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className={'mt-4'}

                                            />
                                        )}
                                    />
                                }

                                {classesData &&
                                    <Controller
                                        name="carClass"
                                        control={filterForm.control}
                                        defaultValue={`${router.query.carClass ? router.query.carClass : ''}`}
                                        render={({ field }) => (
                                            <FilterSelect
                                                data={classesData}
                                                queryKey={'carClass'}
                                                placeholder={'Choose Class'}
                                                label={'Choose Class'}
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className={'mt-4'}
                                            />
                                        )}
                                    />
                                }

                                {fuelsData &&
                                    <Controller
                                        name="carFuel"
                                        control={filterForm.control}
                                        defaultValue={`${router.query.carFuel ? router.query.carFuel : ''}`}
                                        render={({ field }) => (
                                            <FilterSelect
                                                data={fuelsData}
                                                queryKey={'carFuel'}
                                                placeholder={'Any Fuel'}
                                                label={'Any Fuel'}
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                                className={'mt-4'}
                                            />
                                        )}
                                    />
                                }

                                {transitionsData &&
                                    <Controller
                                        name="carTransmission"
                                        control={filterForm.control}
                                        defaultValue={`${router.query.carTransmission ? router.query.carTransmission : ''}`}
                                        render={({ field }) => (
                                            <FilterSelect
                                                data={transitionsData}
                                                queryKey={'carTransmission'}
                                                placeholder={'Any Transmission'}
                                                label={'Any Transmission'}
                                                className="mt-4"
                                                value={field.value}
                                                onChange={(value) => field.onChange(value)}
                                            />
                                        )}
                                    />
                                }
                                <button type="submit" onClick={closeFilterHandler} className="h-12 w-full px-5 mt-7 bg-primary-100 rounded-lg flex justify-between items-center text-white shadow-6xl">
                                    <IconBox icon={'icon-angleRight'} title={'FIND CARS'} titleClassName={'order-first'} />
                                </button>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

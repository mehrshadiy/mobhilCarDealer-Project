import {FilterSelect, IconBox, PopularBrands} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {getAllBrandsApi, getAllClassesApi} from "@/api";
import {ApiResponseType, CarSpecificsType} from "@/types";
import Link from "next/link";
import {useForm, Controller} from "react-hook-form";
import {useRouter} from "next/router";
import {CarFilterType} from "@/types/carFilter";
import {StylesConfig} from "react-select";

interface Props {
    className?: string;
}

export function MiniFilter({className}: Props) {
    const {data: popularBrandsData} = useQuery({
        queryKey: [getAllBrandsApi.name + ' popularBrandsData'],
        queryFn: () => getAllBrandsApi({
            pagination: {
                pageSize: 3
            }
        })
    });

    const {data: brandsData} = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllBrandsApi({}),
        queryKey: [getAllBrandsApi.name]
    });

    const {data: classesData} = useQuery<ApiResponseType<CarSpecificsType>>({
        queryFn: () => getAllClassesApi({}),
        queryKey: [getAllClassesApi.name]
    });

    const router = useRouter();
    const { handleSubmit, control} = useForm<CarFilterType>();

    const submitHandler = (data: CarFilterType) => {
        let filter = {
            carBrand: data.carBrand,
            carClass: data.carClass,
        };
        router.push({pathname: '/products', query: filter});
    };

    // const brandOptions = brandsData ? brandsData.data.map((value) => ({
    //     value: value.attributes.title,
    //     label: value.attributes.title,
    // })) : [];

    // const classOptions = classesData ? classesData.data.map((value) => ({
    //     value: value.attributes.title,
    //     label: value.attributes.title,
    // })) : [];

    const customSelectStyles: StylesConfig<any, false> = {
        control: (provided) => ({
            ...provided,
            height: '100%',
            width: '100%',
            // fontSize: '20px',
            // fontWeight: '700',
            // padding: '10px 0',
            color: '#8a8a8a',
            borderRadius: '8px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#8a8a8a',
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)} className={className}>
                <div
                    className="rounded-xl shadow-3xl sm:w-[600px] xl:w-[700px] 2xl:w-[850px] relative z-50 bg-white mt-7">
                    <div className="flex gap-2 items-center justify-between h-fit xl:h-28 py-4 px-4 lg:px-6">
                        {brandsData && (
                            <Controller
                                name="carBrand"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <FilterSelect
                                        data={brandsData}
                                        queryKey="carBrand"
                                        placeholder="Brand"
                                        label="Brand"
                                        value={field.value}
                                        onChange={(value) => field.onChange(value)}
                                        className={'text-center text-xs  text-white w-1/2 h-full  sm:text-lg xl:text-lg xl:font-bold'}
                                        styles={customSelectStyles}
                                    />
                                )}
                            />
                        )}

                        {classesData && (
                            <Controller
                                name="carClass"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <FilterSelect
                                        data={classesData}
                                        queryKey="carClass"
                                        placeholder="Class"
                                        label="Class"
                                        value={field.value}
                                        onChange={(value) => field.onChange(value)}
                                        className={'text-center text-xs  text-white w-1/2 h-full  sm:text-lg xl:text-lg xl:font-bold'}
                                        styles={customSelectStyles}
                                    />
                                )}
                            />
                        )}

                        <button
                            type={"submit"}
                            className="bg-primary-100 text-xs h-full sm:text-base xl:text-lg text-white px-2 py-3 sm:px-8 rounded-lg hover:bg-gray-400 hover:text-blue-600 xl:font-bold">
                            FIND
                            <IconBox icon={'icon-rightArrow pl-2 sm:pl-14 '}/>
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <Link href={'/products'} className="text-primary-100 text-sm sm:text-base md:text-lg pt-7 ">
                    Try advanced search
                    <IconBox icon={"icon-rightArrow pl-6"}/>
                </Link>
                <div>
                    <h3 className="text-xs md:text-base text-secondary-100 pt-8 2xl:pt-14">
                        Popular Brands
                    </h3>
                    {popularBrandsData && <PopularBrands data={popularBrandsData}/>}
                </div>
            </div>
        </>
    );
}


import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {twMerge} from "tailwind-merge";
import {VerticalSliderCard} from "@/components";
import {ApiResponseType, AlbumType} from "@/types";

interface Props {
    data: ApiResponseType<AlbumType>
    sliderClass?: string
}

export function VerticalSlider({data, sliderClass}: Props) {


    return (
        <>
            <Swiper
                direction={'vertical'}
                className={twMerge('swiper mySwiper rounded-bl-[100px]', sliderClass)}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    data.data[0].attributes.Images.data.map((value, index) => {


                        return (
                            <SwiperSlide key={index} className={'relative'}>
                                <VerticalSliderCard data={value}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}
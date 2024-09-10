"use client"
import {ProductImagesCard} from "@/components";
import {CarsType, EntityType} from "@/types";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperInstance } from "swiper/types";
import {useState} from "react";

interface Props {
    data: EntityType<CarsType>
}
export function ProductImagesSlider({data}: Props) {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null)

    return (
        <div className="flex flex-wrap justify-center gap-y-3 lg:gap-y-7">
            <div className="w-11/12 mb-3">
                <Swiper
                    className="thumbnail-slider"
                    modules={[Navigation, Thumbs, FreeMode]}
                    navigation={true}
                    thumbs={{
                        swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    slidesPerView={1}
                    spaceBetween={20}
                >
                    {data.attributes.gallery.data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ProductImagesCard
                                data={item}
                                index={index}
                                className="rounded-xl w-full h-full lg:max-h-[364px] object-cover object-center"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-11/12 h-fit overflow-x-scroll gap-3 lg:gap-7 py-4">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    className="main-slider"
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs, FreeMode]}
                    slidesPerView={4}
                    spaceBetween={20}
                >
                    {data.attributes.gallery.data.map((item, index) => (
                        <SwiperSlide key={index} className="opacity-70 border border-gray-500 rounded-xl">
                            <ProductImagesCard
                                data={item}
                                index={index}
                                className="w-full h-full aspect-square rounded-xl object-cover object-center"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
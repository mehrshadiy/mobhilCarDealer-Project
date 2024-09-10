import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { TrendingSliderCard } from "@/components";
import { ApiResponseType, CarsType } from "@/types";

interface Props {
    sliderData: ApiResponseType<CarsType>;
    nextEl?: string;
    prevEl?: string;
}

export function TrendingSlider({ sliderData, nextEl, prevEl }: Props) {
    return (
        <Swiper
            className="rounded-bl-[100px] trendingSlider"
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation, Autoplay, EffectFade]}
            navigation={{
                nextEl: nextEl,
                prevEl: prevEl,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
        >
            {sliderData.data.map((value, index) => (
                <SwiperSlide key={index} className="relative">
                    <TrendingSliderCard data={value} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}


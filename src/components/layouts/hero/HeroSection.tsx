interface Props {
    title: string
    backGround?: string
}

export function HeroSection({title, backGround}: Props) {
    return (
        <>
            <div className={`relative ${backGround} bg-cover bg-center h-36 sm:h-56 lg:h-80`}>
                <div className="absolute inset-0 gradient-black"></div>
                <div className="relative z-50 h-full flex flex-col justify-center items-center gap-3 sm:gap-5 lg:gap-9">
                    <h1 className="text-white text-xl sm:text-3xl lg:text-6xl font-bold">
                        {title}
                    </h1>
                    <div className="w-10 h-1 sm:w-14 sm:h-1.4 lg:w-24 lg:h-2 bg-white rounded-2xl"></div>
                </div>
            </div>
        </>
    )
}
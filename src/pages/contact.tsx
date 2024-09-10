import {ContactBox, HeroSection, ImageView, Section, SendMessageForm} from "@/components";

export default function Contact() {
    return (
        <>
            <HeroSection title={'Contact'} backGround={'bg-contact-banner'}/>
            <div className={'relative'}>
                <div className="bg-White-400 h-fit w-full absolute left-0 right-0 top-0 -z-50">
                    <ImageView src={"/assets/images/mapBackground.png"} alt={'map'} width={1600} height={940}
                               classname={"w-4/5 max-w-6xl mx-auto mt-10"}/>
                </div>
            </div>
            <Section className="mb-36 relative">
                <div className="flex flex-wrap container mx-auto px-4 justify-between pt-10 lg:pt-28 gap-y-10 relative">
                    <ImageView src={"/assets/images/circleElement.svg"} alt={"circleElement"} width={66} height={50}
                               classname={"absolute w-16 top-1/2 left-0 lg:w-24 lg:top-1/4 lg:left-[46%] -z-10"}/>
                    <div className="mb-10 w-full lg:w-[45%]">
                        <ImageView src={"/assets/images/Vector.png"} alt={"Vector"} width={64} height={70}
                                   classname={"bg-primary-100 p-4 rounded-2xl aspect-square w-[60px] lg:w-[80px] mb-5 shadow-Xl"}/>
                        <h3 className="font-bold mb-4 text-2xl lg:text-4xl pt-4 lg:pt-10">Let's Talk</h3>
                        <p className="mb-5 text-sm lg:text-base lg:pt-3">
                            Customer engagement is crucial for business success. By having direct conversations and
                            sending friendly messages, we can better understand your needs and provide improved
                            services. We are always ready to listen to your feedback and suggestions.</p>
                        <ul className="flex flex-col max-w-md gap-3 mt-10 -translate-x-3.5">
                            <li className="flex">
                                <ContactBox text={'77 Highfield Road London N36 7SB'}/>
                            </li>
                            <li className="flex">
                                <ContactBox text={'412 444 1124'} link={"tel:+4124441124"}/>
                            </li>
                        </ul>
                    </div>
                    <SendMessageForm/>
                </div>
            </Section>
        </>
    );
}


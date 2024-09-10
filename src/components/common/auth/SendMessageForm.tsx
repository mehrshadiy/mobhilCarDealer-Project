import {useForm} from "react-hook-form";
import {ImageView, Input, LoginModal, RegisterModal} from "@/components";
import {useModal} from "@/store/ModalContext";

interface LoginData {
    fullName: string,
    email: string
    subject: string
}

export function SendMessageForm() {

    const {register, formState: {errors}} = useForm<LoginData>()

    const {currentModal, openModal} = useModal()

    return (
        <>
            {currentModal === 'login' && <LoginModal/>}
            {currentModal === 'register' && <RegisterModal/>}
            <form className="shadow-Xl px-5 py-8 sm:p-12 rounded-2xl w-full max-w-xl lg:max-w-none mx-auto lg:w-[45%] bg-white text-sm lg:text-base flex flex-col gap-5 2xl:gap-9">
                <div className={'flex gap-2'}>
                    <ImageView src={'/assets/images/attention.svg'} alt={'attentionIcon'} width={20} height={20}/>
                    <div className={'text-secondary-100'}>
                        Please <span onClick={() => openModal('login')} className={'font-bold cursor-pointer hover:text-secondary-400'}> Login</span> first to send a message
                    </div>
                </div>
                <div className={'w-full flex flex-col sm:flex-row lg:flex-col 2xl:flex-row gap-4'}>
                <Input ClassName={'basis-1/2'} register={register('fullName', {required: true})} type={'text'}
                           label={'Full Name'} errors={errors} {...{placeholder: 'Enter your Full Name'}}/>
                    <Input ClassName={'basis-1/2'} register={register('email', {required: 'Enter your email please.'})}
                           type={'email'} label={'Email'} errors={errors} {...{placeholder: 'Enter your Email'}}/>
                </div>
                <Input register={register('subject', {required: 'Enter the subject please'})} type={'text'}
                       label={'Subject'} errors={errors} {...{placeholder: 'Enter the Subject'}}/>
                <div className={'flex flex-col w-full gap-1'}>
                    <label className={'text-secondary-100'} htmlFor="">Message</label>
                    <textarea className={'bg-White-500 rounded-lg resize-none outline-none p-4'} rows={7}/>
                </div>
                <button className="w-full text-center bg-primary-100 py-3 rounded-lg text-white font-bold mt-2"
                        type="submit">SEND MESSAGE
                </button>
            </form>
        </>
    );
}
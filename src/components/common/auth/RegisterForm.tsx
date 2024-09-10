import {useForm} from "react-hook-form";
import {Input, LoginModal} from "@/components";
import {useModal} from "@/store/ModalContext";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";

interface FormData {
    fullName: string,
    email: string,
    phoneNumber: string,
    username: string,
    password: string
}

export function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            username: '',
            password: ''
        },
        mode: "onTouched"
    })

    const {currentModal, openModal} = useModal()
    const mutate = useMutation({mutationFn: registerApiCall})
    const {onLogin, onLogout} = useUser()
    const onSubmit = (data: FormData) => {
        console.log(data)
        mutate.mutate(data, {
            onSuccess: (response) => {
                onLogin(response.jwt, response.user)
                toast.success('register successfully')
            }
        })
    }

    return (
        <>
            {currentModal === 'login' && <LoginModal/>}
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-Xl px-5 py-8 md:p-12 rounded-2xl w-full max-w-xl lg:max-w-none mx-auto lg:w-[45%] bg-white text-sm lg:text-base grid gap-3">
                <Input register={register('fullName', {
                    required: 'Enter your full name please',
                    minLength: {value: 4, message: 'Firstname must be at least 4 characters'}
                })} type={'text'} label={'Full name'} errors={errors} {...{placeholder: 'Enter your Firstname'}}/>
                <Input register={register('email', {required: true})} type={'email'} label={'Email'}
                       errors={errors} {...{placeholder: 'Enter your Email'}}/>
                <Input register={register('phoneNumber', {
                    required: 'Enter your phone number please',
                    minLength: {value: 8, message: 'Phone number must be at least 8 characters'}
                })} type={'tel'} label={'Phone'} errors={errors} {...{placeholder: 'Enter your Phone number'}}/>
                <Input register={register('username', {required: true})} type={'text'} label={'Username'}
                       errors={errors} {...{placeholder: 'Enter Username'}}/>
                <Input register={register('password', {
                    required: 'Enter password please',
                    minLength: {value: 8, message: 'Password must be at least 8 characters'}
                })} type={'password'} label={'Password'} errors={errors} {...{placeholder: 'Enter Password'}}/>
                <div className="flex flex-row gap-3">
                    <input type="checkbox" name="" id="termsCheck"/>
                    <label htmlFor="termsCheck" className="text-secondary-100">Accept <span
                        className="text-primary-100 font-bold">terms & conditions</span></label>
                </div>
                <div className={'flex text-secondary-100 mb-6 text-sm'}>
                    <span className={'hover:text-primary-100 cursor-pointer pl-1 font-medium'}
                          onClick={() => openModal('login')}>Login</span>
                    <span className={'hover:text-primary-100 cursor-pointer pl-1 font-medium'} onClick={onLogout}>/ Logout</span>
                </div>
                <button className="w-full text-center bg-primary-100 p-4 rounded-2xl text-white font-bold"
                        type="submit">Sign Up
                </button>
            </form>
        </>
    );
}
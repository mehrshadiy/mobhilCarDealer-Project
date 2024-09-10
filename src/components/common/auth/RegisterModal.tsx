import {useForm} from "react-hook-form";
import {Input, Modal} from "@/components";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {useModal} from "@/store/ModalContext";
import {toast} from "react-toastify";
import Link from "next/link";

interface FormData {
    email: string,
    username: string,
    password: string
}

export function RegisterModal() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            email: '',
            username: '',
            password: ''
        },
        mode: "onTouched"
    })
    const mutate = useMutation({mutationFn: registerApiCall})
    const {closeModal} = useModal()
    const {onLogin} = useUser()
    const submitHandler = (data: FormData) => {
        mutate.mutate(data,{
            onSuccess: (response)=>{
                onLogin(response.jwt, response.user)
                closeModal()
                toast.success('Register successfully')
            }
        })
    }

    return (
        <Modal title={'register'}>
            <form onSubmit={handleSubmit(submitHandler)} className={'p-12 rounded-2xl bg-white text-sm lg:text-base flex flex-col gap-3'}>
                <Input register={register('email', {required: true})} type={'email'} label={'Email'}
                       errors={errors} {...{placeholder: 'Enter your Email'}}/>
                <Input register={register('username', {required: true})} type={'text'} label={'Username'}
                       errors={errors} {...{placeholder: 'Enter Username'}}/>
                <Input register={register('password', {
                    required: 'Enter password please',
                    minLength: {value: 8, message: 'Password must be at least 8 characters'}
                })} type={'password'} label={'Password'} errors={errors} {...{placeholder: 'Enter Password'}}/>
                <div className="flex flex-row gap-3">
                    <input type="checkbox" name="termsCheck" id="termsCheck" className={'cursor-pointer'}/>
                    <label htmlFor="termsCheck" className="text-secondary-100">Accept <Link href={'#'} className="text-primary-100 font-bold">terms & conditions</Link></label>
                </div>
                <button className="w-full text-center bg-primary-100 p-4 rounded-2xl text-white text-lg font-bold" type="submit">Register</button>
            </form>
        </Modal>
    );
}
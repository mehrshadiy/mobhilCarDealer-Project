import {FieldErrors, UseFormRegisterReturn} from "react-hook-form";
import {ErrorMessage} from "@/components/common/ui/form/ErrorMessage";
import {useId} from "react";


interface Props extends React.HTMLAttributes<HTMLInputElement>{
    label?: string,
    type?: 'text' | 'number' | 'email' | 'tel' | 'password',
    register: UseFormRegisterReturn<any>
    errors: FieldErrors<any>
    ClassName?: string
}

export function Input({label, type = 'text', register, errors, ClassName ='', ...rest}: Props) {

    const id = useId()
    const name = register.name
    let hasError = false
    if (errors && errors[name]){
        hasError = true
    }

    return (
        <div className={ClassName}>
            <div className="flex flex-col gap-1 mb-1">
                <label htmlFor="fullNameInput" className="text-secondary-100">{label}</label>
                <input type={type} id={id} {...register} {...rest} className={`bg-White-500 rounded-lg p-4 ${(hasError) ? 'outline-red-600': 'outline-primary-100'}`}/>
            </div>
            <ErrorMessage errors={errors} name={name}/>
        </div>
    );
}
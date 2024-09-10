import {FieldErrors} from "react-hook-form";

interface Props {
    errors: FieldErrors<any>
    name: string
}

export function ErrorMessage({errors, name}: Props) {
    return (
        errors && errors[name] && (
            <div className={'text-red-600 '}>
                {errors[name]?.message ? errors[name]?.message as string : `Enter your ${name} please`}
            </div>
        )
    );
}
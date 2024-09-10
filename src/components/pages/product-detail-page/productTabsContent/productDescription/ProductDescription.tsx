interface Props {
    data?: string
}

export function ProductDescription({data}: Props) {

    return (
        <>
            <p className="text-secondary-100 text-sm lg:text-base text-justify m-3">
                {data}
            </p>
        </>
    );
}
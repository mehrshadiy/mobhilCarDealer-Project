interface Props {
    data: any
    marginBottom?: number
}

export function CarFeatures({data, marginBottom = 0}: Props) {

    console.log('data:' , data.attributes.transition?.data?.attributes.title)

    return (
        <>
            <ul style={{marginBottom: `${marginBottom}px`}}
                className="grid grid-cols-3 justify-start text-left text-xs gap-y-2 xl:text-sm gap-x-5 md:gap-x-8 pt-7 max-w-md">
                <li>
                    Transition <br/>
                </li>
                <li>
                    Fuel
                </li>
                <li>
                    Passenger
                </li>
                <li className={'font-semibold xl:text-base'}>
                    {
                        data.attributes.transition.data?.attributes.title ?
                            data.attributes.transition.data?.attributes.title
                            :
                            ''
                    }
                </li>
                <li className={'font-semibold xl:text-base'}>
                    {
                        data.attributes.fuel.data?.attributes.title ?
                            data.attributes.fuel.data?.attributes.title
                            :
                            ''
                    }
                </li>
                <li className={'font-semibold xl:text-base'}>
                    {data?.attributes.passenger} Person
                </li>
            </ul>
        </>
    );
}
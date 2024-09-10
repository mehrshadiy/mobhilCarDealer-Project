import {TeamCard} from "@/components";
import {ApiResponseType, TeamMemberType} from "@/types";

interface Props {
    data: ApiResponseType<TeamMemberType>
}

export function OurTeam({data}: Props) {
    return (
        <>
            <div className="md:w-5/6 mx-auto grid grid-cols-3 sm:grid-cols-4 gap-3 lg:gap-x-9 gap-y-9 pt-16 lg:pt-24 ">
                {
                    data &&
                    data.data.map((value, index) => {
                        return (
                            <TeamCard data={value} key={index} first={index === 0} last={index === (data.data.length - 1)}/>
                        )
                    })
                }
            </div>
        </>
    )
}
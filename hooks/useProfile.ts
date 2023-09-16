import { useQuery } from "@tanstack/react-query"
import { UserSevice } from "../providers/user.service"
import { IFullUser, IUser } from "../types/user.types"

export const useProfile = () => {

    const {data} = useQuery(["get profile"], () => UserSevice.getProfile(), {
        select: ({data}) => data
    })

    return {profile: data}
}
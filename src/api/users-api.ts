import {axiosInstance} from "./api";
import {UserType} from "../types/types";

type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export const usersAPI = {
    getUser(currentPage: number = 2, pageSize: number = 15) {
        return axiosInstance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    changeUserFollow(method: any, id: number) {
        return axiosInstance({
            method: method,
            url: `follow/${id}`
        }).then(response => response.data)
    },
}
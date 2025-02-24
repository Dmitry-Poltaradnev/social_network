import {ProfileType} from "../types/types";
import {axiosInstance, ResultCodeEnum} from "./api";

export type PutProfileStatusType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: any
}

export type GetProfileStatusType = {
    userId: number
}
type ChangeUserFollowType = {}
// type PutSavePhotoType = {
//     data: { photos: PhotosProfileType }; // Должно быть так
// };
// type GetProfileType = {
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: {
//         github: string
//         vk: string
//         facebook: string
//         instagram: string
//         twitter: string
//         website: string
//         youtube: string
//         mainLink: string
//     }
// }


export const profileAPI = {
    getProfile(userId: number) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getProfileStatus(userId: number) {
        return axiosInstance.get(`profile/status/${userId}`).then(response => response.data)
    },
    putProfileStatus(newUserStatus: string) {
        return axiosInstance.put<PutProfileStatusType>(`profile/status`, {status: newUserStatus}).then(response => response.data)
    },
    putSavePhoto(photos: any) {
        const formData = new FormData();
        formData.append('image', photos)
        return axiosInstance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileType) {
        return axiosInstance.put(`profile`, profile)
    },
}
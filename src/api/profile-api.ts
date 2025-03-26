import {PhotosProfileType, ProfileType} from "../types/types";
import {axiosInstance, ResponseType} from "./api";

type  SavePhotoResType = {
    photos: PhotosProfileType
}

export const profileAPI = {
    getProfile(userId: number) {
        return axiosInstance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getProfileStatus(userId: number) {
        return axiosInstance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },
    putProfileStatus(newUserStatus: string) {
        return axiosInstance.put<ResponseType>(`profile/status`, {status: newUserStatus}).then(response => response.data)
    },
    putSavePhoto(photos: any) {
        const formData = new FormData();
        formData.append('image', photos)
        return axiosInstance.put<ResponseType<SavePhotoResType>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile: ProfileType) {
        return axiosInstance.put<ResponseType>(`profile`, profile).then(response => response.data)
    },
}
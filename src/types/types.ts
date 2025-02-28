export type ContactsProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type UserType = {
    name: string
    id: number
    status: string
    photos: PhotosProfileType
    followed: boolean
}
export type ProfileType = {
    id: number
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    photos: PhotosProfileType
    contacts: ContactsProfileType
}
export type PhotosProfileType = {
    small: null | string
    large: null | string
}

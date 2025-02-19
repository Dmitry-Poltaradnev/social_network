export type ContactsProfileType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type UsersType = {
    name: string
    id: number,
    status: string,
    photos: PhotosProfileType,
    followed: boolean,
}
export type ProfileType = {
    id: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    aboutMe : string,
    fullName: string,
    photos: PhotosProfileType
    contacts: ContactsProfileType
}
export type PhotosProfileType = {
    small: string | null,
    large: string | null,
}
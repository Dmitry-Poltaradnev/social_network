export type ContactsUserType = {
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
    photos: PhotosUserType,
    followed: boolean,
}
export type UserType = {
    id: number,
    lookingForAJob: boolean,
    name: string,
    photos: PhotosUserType
    contacts: ContactsUserType
}
export type PhotosUserType = {
    small: string | null,
    large: string | null,
}
export type FriendType = {
    id?: string,
    avaLink: string,
    name: string,
}
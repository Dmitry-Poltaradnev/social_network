export const changeFollow = (id: string, followStatus: boolean) => {
    return({type: 'CHANGE-FOLLOW', payload: {id , followStatus}});
}
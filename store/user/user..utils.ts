export const getLocalStorage = (name : string) => {
    if(typeof localStorage !== 'undefined') {
        const is = localStorage.getItem(name)
        return is ? JSON.parse(is) : null
    }
}
export const Key_Access_Token="access_token";
export function getItem(key){
    return localStorage.getItem(key);
}
export function setItem(key,value){
    localStorage.setItem(key,value);
}
export function deleteUser(key){
    localStorage.removeItem(key)
}
export function countUser(key){
    return localStorage.countUser(key)
}
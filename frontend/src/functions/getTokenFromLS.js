export function GetTokenFromLocalStorage(){
    const token =JSON.parse(localStorage.getItem("token"))||null
    return token
}
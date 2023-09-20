export const isLoggedIn = () => {
    const user = localStorage.getItem('currentUser');
    return user;
}
export const isForgotValid = () => {
    const user = localStorage.getItem('forgotUser');
    return user;
}
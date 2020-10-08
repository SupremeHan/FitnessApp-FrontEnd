export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { Autorization: 'Bearer' + user.token };
    } else {
        return {};
    }
}
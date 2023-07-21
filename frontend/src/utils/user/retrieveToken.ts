export default function retrieveToken() {
    const retrievedLocalToken: string = localStorage.getItem('@token');
    const retrievedSessionToken: string = sessionStorage.getItem('@token')

    if (retrievedLocalToken) {
        return retrievedLocalToken
    } else if (retrievedSessionToken) {
        return retrievedSessionToken
    }
}

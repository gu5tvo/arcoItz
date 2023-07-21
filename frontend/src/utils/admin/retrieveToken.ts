export default function retrieveToken() {
    const retrievedLocalToken: string = localStorage.getItem('@adminToken');
    const retrievedSessionToken: string = sessionStorage.getItem('@adminToken')

    if (retrievedLocalToken) {
        return retrievedLocalToken
    } else if (retrievedSessionToken) {
        return retrievedSessionToken
    }
}

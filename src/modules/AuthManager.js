const authAPIUrl = "http://localhost:8000"

export default {
    registerUser(newUser) {
        return fetch(`${authAPIUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
    },
    loginUser(userCreds) {
        return fetch(`${authAPIUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userCreds)
        })
            .then(response => response.json())
    }
}
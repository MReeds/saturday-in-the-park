import { useState } from "react"
import AuthManager from "../../modules/AuthManager";

const useSimpleAuth = () => {
    const [loggedIn, setIsLoggedIn] = useState(false)

    const isAuthenticated = () => 
        loggedIn || sessionStorage.getItem("kennywood-token") !== null

    const register = registrationInfo => {
        return AuthManager.registerUser(registrationInfo)
            .then(parsedResponse => {
                if ("token" in parsedResponse) {
                    sessionStorage.setItem("kennywood-token", parsedResponse.token)
                }
            })
    }

    const login = credentials => {
        return AuthManager.loginUser(credentials)
            .then(parsedResponse => {
                if ("valid" in parsedResponse && parsedResponse.valid && "token" in parsedResponse) {
                    sessionStorage.setItem("kennywood-token", parsedResponse.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setIsLoggedIn(false)
        sessionStorage.removeItem("kennywood-token")
    }

    return { isAuthenticated, logout, login, register }
}

export default useSimpleAuth
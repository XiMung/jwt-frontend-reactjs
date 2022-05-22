
import axios from "axios"
const registerNewUser = async (email, phone, username, password, confirmPassword) => {
    return axios.post('http://localhost:1998/api/v1/register', {
        email, phone, username, password, confirmPassword
    })
}

const login = async (valueLogin, password) => {
    return axios.post('http://localhost:1998/api/v1/login', {
        valueLogin, password
    })
}

export {
    registerNewUser,
    login
}
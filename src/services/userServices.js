
import axios from "axios"
const registerNewUser = async (email, phone, username, password, confirmPassword) => {
    return axios.post('http://localhost:1998/api/v1/register', {
        email, phone, username, password, confirmPassword
    })
}

export {
    registerNewUser
}
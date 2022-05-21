
import './Register.scss';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerNewUser } from '../../services/userServices'

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidUsername: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    }
    const [isCheckInput, setIsCheckInput] = useState(defaultValidInput);

    let history = useHistory()
    const handleLogin = () => {
        history.push('./login')
    }

    const handleRegister = async () => {
        let check = isValidInputs();

        if (check === true) {
            let response = await registerNewUser(email, phone, username, password, confirmPassword)
            if (+response.data.EC === 0) {
                toast.success(response.data.EM)
                history.push('./login')
            } else {
                toast.error(response.data.EM)
            }
        }
    }

    const isValidInputs = () => {
        setIsCheckInput(defaultValidInput);
        if (!email) {
            toast.error("Email is required.")
            setIsCheckInput({ ...defaultValidInput, isValidEmail: false })
            return false;
        } else {
            let re = /\S+@\S+\.\S+/;
            if (!re.test(email)) {
                toast.error("Please enter a valid email address.")
                setIsCheckInput({ ...defaultValidInput, isValidEmail: false })
                return false;
            }
        }


        if (!phone) {
            toast.error("Phone is required.")
            setIsCheckInput({ ...defaultValidInput, isValidPhone: false })
            return false;
        } else {
            let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (!regex.test(phone)) {
                toast.error("Please enter ten numbers for phone.")
                setIsCheckInput({ ...defaultValidInput, isValidPhone: false })
                return false;
            }
        }
        if (!username) {
            toast.error("Username is required.")
            setIsCheckInput({ ...defaultValidInput, isValidUsername: false })
            return false;
        }
        if (!password) {
            toast.error("Password is required.")
            setIsCheckInput({ ...defaultValidInput, isValidPassword: false })
            return false;
        }
        if (!confirmPassword) {
            toast.error("Confirm Password is required.")
            setIsCheckInput({ ...defaultValidInput, isValidConfirmPassword: false })
            return false;
        }

        if (password != confirmPassword) {
            toast.error("Password and Confirm Password are not the same.")
            return false;
        }

        return true;
    }

    useEffect(() => {
        // axios.get("http://localhost:1998/api/v1/test-api")
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

        // axios.post('http://localhost:1998/api/v1/register', {
        //     email, phone, username, password
        // })
    }, [])

    return (
        <div className="register-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">
                            QUANG HIEU
                        </div>
                        <div className="detail">
                            QUANG HIEU helps you connect and share with the people in your life.
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">
                            QUANG HIEU
                        </div>

                        <div className="form-group">
                            <label >Email address:</label>
                            <input className={isCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} type="text" placeholder='Email address...'
                                value={email} onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >Phone number:</label>
                            <input className={isCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} type="text" placeholder='Password...'
                                value={phone} onChange={(event) => {
                                    setPhone(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >User name:</label>
                            <input className={isCheckInput.isValidUsername ? 'form-control' : 'form-control is-invalid'} type="text" placeholder='User name...'
                                value={username} onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >Password:</label>
                            <input className={isCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} type="password" placeholder='Password...'
                                value={password} onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >Re-enter password:</label>
                            <input className={isCheckInput.isValidConfirmPassword ? 'form-control' : 'form-control is-invalid'} type="password" placeholder='Re-enter password...'
                                value={confirmPassword} onChange={(event) => {
                                    setConfirmPassword(event.target.value);
                                }}
                            />
                        </div>

                        <button className='btn btn-primary' type="button" onClick={() => handleRegister()}>
                            Register
                        </button>

                        <hr></hr>
                        <div className="text-center">
                            <button className='btn btn-success' type="button" onClick={() => handleLogin()}>
                                Already've an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
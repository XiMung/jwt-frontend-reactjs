
import './Register.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory()
    const handleLogin = () => {
        history.push('./login')
    }

    const handleRegister = () => {
        let check = isValidInputs()
        let userData = { email, phone, username, password, confirmPassword };
        console.log(userData);
    }

    const isValidInputs = () => {
        if (!email) {
            toast.error("Email is required.")
            return false;
        } else {
            let re = /\S+@\S+\.\S+/;
            if (!re.test(email)) {
                toast.error("Please enter a valid email address.")
                return false;
            }
        }


        if (!phone) {
            toast.error("Phone is required.")
            return false;
        } else {
            let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (!regex.test(phone)) {
                toast.error("Please enter ten numbers for phone.")
                return false;
            }
        }
        if (!username) {
            toast.error("Username is required.")
            return false;
        }
        if (!password) {
            toast.error("Password is required.")
            return false;
        }
        if (!confirmPassword) {
            toast.error("Confirm Password is required.")
            return false;
        }

        if (password != confirmPassword) {
            toast.error("Password and Confirm Password are not the same.")
            return false;
        }

        return true;
    }

    useEffect(() => {
        // axios.get("https://reqres.in/api/users?page=2")
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
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
                            <input className='form-control' type="text" placeholder='Email address...'
                                value={email} onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >Phone number:</label>
                            <input className='form-control' type="text" placeholder='Password...'
                                value={phone} onChange={(event) => {
                                    setPhone(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >User name:</label>
                            <input className='form-control' type="text" placeholder='User name...'
                                value={username} onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >Password:</label>
                            <input className='form-control' type="password" placeholder='Password...'
                                value={password} onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label >Re-enter password:</label>
                            <input className='form-control' type="password" placeholder='Re-enter password...'
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
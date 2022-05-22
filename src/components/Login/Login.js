
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { login } from '../../services/userServices'

const Login = (props) => {
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultValidInput = {
        isValidLogin: true,
        isValidPassword: true,
    }
    const [isCheckInput, setIsCheckInput] = useState(defaultValidInput);


    let history = useHistory()
    const handleCreateNewAccount = () => {
        history.push('./register')
    }

    const handleLogin = async () => {
        setIsCheckInput(defaultValidInput);
        if (!valueLogin) {
            toast.error("Please enter email address or your phone number")
            setIsCheckInput({ ...defaultValidInput, isValidLogin: false })
            return;
        }
        if (!password) {
            toast.error("Please enter your password")
            setIsCheckInput({ ...defaultValidInput, isValidPassword: false })
            return;
        }

        let response = await login(valueLogin, password)
        if (+response.data.EC === 0) {
            toast.success(response.data.EM)

            let data = {
                isAuthenticated: true,
                token: "fake token"
            }

            sessionStorage.setItem('account', JSON.stringify(data));
            history.push('/users')
        } else {
            toast.error(response.data.EM)
        }
    }

    return (
        <div className="login-container">
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
                        <input
                            className={isCheckInput.isValidLogin ? 'form-control' : 'form-control is-invalid'}
                            type="text"
                            placeholder='Email address or phone number'
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}
                        />
                        <input
                            className={isCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'}
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <button
                            className='btn btn-primary'
                            type="button"
                            onClick={() => handleLogin()}
                        >
                            Login
                        </button>
                        <span className='text-center'>
                            <a className='forgot-password' href="#">forgot your password ?</a>
                        </span>
                        <hr></hr>
                        <div className="text-center">
                            <button className='btn btn-success' type="button" onClick={() => handleCreateNewAccount()}>
                                Create a new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
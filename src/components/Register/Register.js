
import './Register.scss';
import { useHistory } from 'react-router-dom';

const Register = (props) => {
    let history = useHistory()
    const handleLogin = () => {
        history.push('./login')
    }

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
                            <input className='form-control' type="text" placeholder='Email address...' />
                        </div>

                        <div className="form-group">
                            <label >Phone number:</label>
                            <input className='form-control' type="text" placeholder='Password...' />
                        </div>

                        <div className="form-group">
                            <label >User name:</label>
                            <input className='form-control' type="text" placeholder='User name...' />
                        </div>

                        <div className="form-group">
                            <label >Password:</label>
                            <input className='form-control' type="password" placeholder='Password...' />
                        </div>

                        <div className="form-group">
                            <label >Re-enter password:</label>
                            <input className='form-control' type="password" placeholder='Re-enter password...' />
                        </div>

                        <button className='btn btn-primary' type="button">Register</button>

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
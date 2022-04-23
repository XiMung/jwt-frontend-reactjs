
import './Login.scss';
const Login = (props) => {
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
                        <input className='form-control' type="text" placeholder='Email address or phone number' />
                        <input className='form-control' type="password" placeholder='Password' />
                        <button className='btn btn-primary' type="button">Login</button>
                        <span className='text-center'>
                            <a className='forgot-password' href="#">forgot your password ?</a>
                        </span>
                        <hr></hr>
                        <div className="text-center">
                            <button className='btn btn-success' type="button">Create a new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
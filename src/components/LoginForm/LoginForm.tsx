import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm():JSX.Element {
    return (
        <div className="login">
            <div className="container">
                <h2>Login Form</h2>

                <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
                    <form>
                        <input type="email" placeholder="Email Address" required/>
                        <input type="password" placeholder="Password" required />
                        <div className="forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
                <h4>For New People</h4>
                <p><Link to='/createAccount'>Register Here</Link> (Or) go back to <Link to='/' >Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link></p>
            </div>
        </div>
    )
}

export default LoginForm
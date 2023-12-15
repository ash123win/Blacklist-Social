import "./login.css"

export default function Login() {
  return (
    <div className="login ">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginlogo">The_Post Office</h3>
            <span className="loginDesc">
                Welcome to the Post Office,Information received and relayed.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput"/>  
              <input placeholder="Password" className="loginInput"/> 
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterbutton">Create a new Account</button>
            </div>
        </div>
    </div>

    </div>
  )
}

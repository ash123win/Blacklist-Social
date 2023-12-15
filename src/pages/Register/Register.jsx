import "./register.css"

export default function Register() {
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
              <input placeholder="Username" className="loginInput"/> 
              <input placeholder="Email" className="loginInput"/>  
              <input placeholder="Password" className="loginInput"/> 
              <input placeholder="Password Again" className="loginInput"/> 
              <button className="loginButton">Sign in</button>
           
              <button className="loginRegisterbutton">Log in to your Account</button>
            </div>
        </div>
    </div>

    </div>
  )
}

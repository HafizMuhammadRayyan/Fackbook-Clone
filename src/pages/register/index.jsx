import './index.scss'
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className='Register'>

      <div className="card">

        <div className="left">
          <h1>Social Fakebook.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam doloremque cupiditate hic id ex neque excepturi dolores a aperiam.</p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>Register</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register

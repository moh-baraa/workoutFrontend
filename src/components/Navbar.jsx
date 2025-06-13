import { Link, useNavigate } from 'react-router-dom'

const Navbar = ()=>{
    const navigate = useNavigate()

    const users = JSON.parse(localStorage.getItem('user'))

    const handleClick = () => {
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
    }

    return (
        <header>
            <div className='container'>
                 <Link to="/">{/*to main page */}
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {users && (
                        <div>
                            <span>
                                {users.email}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                            <button onClick={handleClick}> Log out</button>
                        </div>
                    )}
                    {!users && (
                        <div>
                            <Link className='registerLink' to="/login">Login</Link>
                            <Link className='registerLink' to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}
export default Navbar
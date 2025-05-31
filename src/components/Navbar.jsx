import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header>
            <div className='container'>
                 <Link to="/">{/*to main page */}
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}
export default Navbar

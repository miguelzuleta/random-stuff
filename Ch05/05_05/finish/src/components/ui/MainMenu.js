import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => (
    <nav>
        <Link to="/"><FaHome/></Link>
        <Link to="about">About</Link>
        <Link to="members">Members</Link>
        <Link to="people">People</Link>
    </nav>
)

export default MainMenu

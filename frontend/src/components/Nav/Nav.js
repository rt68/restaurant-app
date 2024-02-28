import { Link } from 'react-router-dom';
import Auth from '../../pages/Auth/Auth'

export default function Nav({setUser}) {

    return (
        <nav>
            <Link to='/'>Ramen Time - 拉面时光</Link> &nbsp; | &nbsp;
            <Link to="/menu">Menu</Link> &nbsp; | &nbsp;
            {/* <Link to="/login">Login</Link>  &nbsp; | &nbsp;
            <Link to="/signup">Sign Up</Link> */}
            <Auth setUser={setUser}/>
        </nav>
    )
}
import { Link } from 'react-router-dom';
import Auth from '../../pages/Auth/Auth';
import UserLogOut from '../UserLogOut/UserLogOut'

export default function Nav({user,setUser}) {

    return (
        <nav>
            <Link to='/'>Ramen Time - 拉面时光</Link> &nbsp; | &nbsp;

            {user?(<>Hello {user.name}&nbsp; | &nbsp; <UserLogOut user={user} setUser={setUser} />
            <Link to="/orders/new">Menu</Link> &nbsp; | &nbsp;</>):(<> <Link to="/users">Sign Up/Log In</Link>
            &nbsp; | &nbsp;
            <Link to = "/menu">Menu</Link>
            </>
            )}
            
            {/* <Link to="/login">Login</Link>  &nbsp; | &nbsp;
            <Link to="/signup">Sign Up</Link> */}
           
        </nav>
    )
}
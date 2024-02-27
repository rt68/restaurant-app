import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <nav>
            <h1>Welcome to Ramen Time Restaurant!</h1> &nbsp; | &nbsp;
            <Link to="/orders/new">Menu</Link> &nbsp; | &nbsp;
            <Link to="/">Login</Link>
        </nav>
    )
}
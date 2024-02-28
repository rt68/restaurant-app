import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <nav>
            <h1>Welcome to BAM JR Restaurant!</h1> &nbsp; | &nbsp;
            <Link to="/menu">Menu</Link> &nbsp; | &nbsp;
            <Link to="/login">Login</Link> &nbsp; | &nbsp;
            <Link to="/cart"> Shopping Cart </Link>
        </nav>
    )
}
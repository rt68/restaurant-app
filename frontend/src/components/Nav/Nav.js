import { Link } from 'react-router-dom';

export default function Nav() {

    return (
        <nav>
            <h1>Welcome to BAM JR Restaurant!</h1>
            <Link to="/orders/new">Menu</Link>
        </nav>
    )
}
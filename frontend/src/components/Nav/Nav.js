// import { Link } from 'react-router-dom';
// import Auth from '../../pages/Auth/Auth';
// import UserLogOut from '../UserLogOut/UserLogOut'

// export default function Nav({user, setUser}) {

//     return (
//         <nav>
//             <Link to='/'>Ramen Time - 拉面时光</Link> &nbsp; | &nbsp;
//             {user?(<>Hello {user.name}&nbsp; | &nbsp; <UserLogOut user={user} setUser={setUser} />
//             <Link to="/orders/new">Cart</Link> &nbsp; | &nbsp;</>):(<>
//                 <Link to = "/menu">Menu</Link>&nbsp; | &nbsp;
//              <Link to="/users">Sign Up/Log In</Link>
//             &nbsp; | &nbsp;
//             <Link to ="/cart"> Cart </Link>
//             </>
//             )}
// {/*
//             <Link to="/login">Login</Link>  &nbsp; | &nbsp;
//             <Link to="/signup">Sign Up</Link> */}

//         </nav>
//     )
// }

import { Link } from "react-router-dom";
import styles from './Nav.module.css'
import UserLogOut from "../UserLogOut/UserLogOut";

export default function Nav({ user, setUser }) {
  return (
    <nav className={styles.nav} >
      <div className={styles.div}>
      <Link className={styles.logo}to="/">Ramen Time - 拉面时光</Link> &nbsp; | &nbsp;
      {user ? (
        <>
          Hello, {user.name}!&nbsp; | &nbsp;{" "}
          <UserLogOut user={user} setUser={setUser} />
          <Link to="/orders/new">Menu</Link> &nbsp; | &nbsp;
        </>
      ) : (
        <>
          {" "}
          <Link className={styles.signup} to="/users">Sign Up/Log In</Link>
          &nbsp; | &nbsp;
          <Link className={styles.signup} to="/menu">Menu</Link>
        </>
      )}
      </div>
    <img className={styles.img} src="https://res.cloudinary.com/dxh60x8dq/image/upload/v1709171777/Ramen%20Time%20Images/image_hvgccx.png" alt="Crane-banner"/>
      {/* <Link to="/login">Login</Link>  &nbsp; | &nbsp;
            <Link to="/signup">Sign Up</Link> */}
    </nav>
  );
}

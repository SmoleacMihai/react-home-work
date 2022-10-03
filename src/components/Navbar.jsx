import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/about">About</Link>
    </nav>
   );
}
 
export default NavBar;
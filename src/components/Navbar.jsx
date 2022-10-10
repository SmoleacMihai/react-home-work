import { Link } from "react-router-dom";
import navSettings from "../data/navBar"

const NavBar = () => {
  return ( 
    <nav>
      {
        navSettings.map(object => <Link to={object.linkTo}>{object.name}</Link>)
      }
    </nav>
   );
}
 
export default NavBar;
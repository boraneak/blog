import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/articles"}>Articles</Link></li>
        {/* <li><Link to={"/article-page/:article-id"}>Article List</Link></li> */}
        <li><Link to={"/about"}>About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;

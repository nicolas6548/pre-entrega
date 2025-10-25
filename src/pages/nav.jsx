import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/servicios">SERVICIOS</Link>
        </li>
        <li>
          <Link to="/nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/Theme";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <Link to={"/"}>Головна</Link>
          </li>
          <li>
            <Link to={"/contacts"}>Контакти</Link>
          </li>
          <li>
            <Link to={"/about"}>Про мене</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>Темна / Світла</button>
    </header>
  );
}

export default Header;

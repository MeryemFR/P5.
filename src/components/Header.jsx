// import logo from "../../assets/images/logo/LOGO.svg";
import Nav from "./Nav";
import logo from "../assets/images/logo/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}

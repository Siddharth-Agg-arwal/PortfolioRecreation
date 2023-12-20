import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink to="/">HI! I'M PRABHAV KHANDELWAL.</NavLink>
      <NavLink to="/work">DESIGN & CODE,</NavLink>
      <NavLink to="/blog">WORDS & DOODLES,</NavLink>
      <NavLink to="/about">BIO & FACE</NavLink>
      
    </nav>
  );
}

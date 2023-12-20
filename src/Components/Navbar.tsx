import { NavLink } from "react-router-dom";
// import { Open_Sans } from 'next/font/google';

// const openSans = Open_Sans({
//     style:normal,
// });

export function NavBar() {
  return (
    <div>
    <nav className="navbar-container">
      <div className="leftNav">
        <NavLink className="selectionEffect" to="/">HI! I'M PRABHAV KHANDELWAL.</NavLink>
      </div>
      <div className="rightNav">
        <NavLink className="selectionEffect" to="/work">DESIGN & CODE,</NavLink>
        <NavLink className="selectionEffect" to="/blog">WORDS & DOODLES,</NavLink>
        <NavLink className="selectionEffect" to="/about">BIO & FACE</NavLink>
      </div>
    </nav>
    <div className="navHorizontalRule"><hr /></div>
    </div>
  );
}

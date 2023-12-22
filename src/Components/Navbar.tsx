import Link from 'next/link';
// import { Open_Sans } from 'next/font/google';

// const openSans = Open_Sans({
//     style:normal,
// });

const NavBar = () => {
  return (
    <div>
    <nav className="navbar-container">
      <div className="leftNav">
        <Link className="selectionEffect" href="/">HI! I'M PRABHAV KHANDELWAL.</Link>
      </div>
      <div className="rightNav">
        <Link className="selectionEffect" href="/work">DESIGN & CODE,</Link>
        <Link className="selectionEffect" href="/blog">WORDS & DOODLES,</Link>
        <Link className="selectionEffect" href="/about">BIO & FACE</Link>
      </div>
    </nav>
    <div className="navHorizontalRule"><hr /></div>
    </div>
  );
}

export default NavBar

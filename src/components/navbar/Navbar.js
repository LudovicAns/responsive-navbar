import { useRef, useEffect } from 'react'
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "./Logo.svg"

/**
 * Navbar react function component is a responsive navbar using css.
 * 
 * This component won't work without it css file.
 * 
 * 
 * You can find css file here:
 * https://github.com/LudovicAns/responsive-navbar/blob/master/src/components/navbar/Navbar.css
 * 
 * @version 1.0.0
 * @author LudovicAns
 * @returns JSX
 */
export default function Navbar() {

  // Reference to navbar.
  const navRef = useRef();
  
  // Toggle navbar by adding/removing a class style.
  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }
  
  // We use useEffect function with no dependency to call only one time the callback function.
  // Maybe that can be better ...
  useEffect(() => {

    // Handler for resize event.
    const changeWidth = () => {
      // Remove responsive class style when screen width > 1024px.
      if (window.innerWidth > 1024) {
        navRef.current.classList.remove("responsive-nav");
      }
    };

    // Listen to resize event.
    window.addEventListener('resize', changeWidth);

    // Cleanup function to remove resize event listener.
    return (() => {
      window.removeEventListener('resize', changeWidth);
    });

  }, []);

  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav ref={navRef}>
          <a href='/#'>Accueil</a>
          <a href='/#'>Boutique</a>
          <a href='/#'>À Propos</a>
          <a href='/#'>Contact</a>
          <button className='nav-btn nav-close-btn' onClick={toggleNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={toggleNavbar}>
          <FaBars />
        </button>
    </header>
  )
}
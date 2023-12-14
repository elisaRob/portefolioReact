import React, {useState, useRef, useEffect} from "react"
import { NavLink } from "react-router-dom";
import "../styles/navigation.css"


const Navigation = () => {

const [isMenuOpen,setMenuOpen]=useState(false) 
const utilisationReference= useRef(null);
const dernierFocus = useRef(null)


const clickEnDehorsDuMenu = (event) => {
  if (utilisationReference.current && !utilisationReference.current.contains(event.target)) {
    setMenuOpen(false);
  }
};

useEffect(()=>{
  document.addEventListener("click",clickEnDehorsDuMenu);

  return () =>{
    document.removeEventListener("click",clickEnDehorsDuMenu)
  }
},[])

const toggle=() => {
  setMenuOpen(!isMenuOpen)
}

const entreeSurClavier = (e) =>{
  if(e.key ==="Enter"){
    toggle()
  }
}

const recupererLeDernierElement = () =>{
  const elementActif = document.activeElement;
  if(elementActif !== dernierFocus.current){
    toggle();
  }
}

  return (
    <header className={`enTete ${isMenuOpen ? "menuOpen" : ""}`} ref={utilisationReference}>
      <div className="sr-only"><a href="#finDuHeader">Passer au contenu principal</a></div> 
      {/* <div className="maPresentation">
        <img src="./media/img/photo.webp" width="73px" alt="Portait d'Elisabeth ROBERT AOUCHER" />
        <span>Elisa ROBERT AOUCHER</span>
      </div> */}

      <div className="contenuHeader">

        <div className="maPresentation">
          
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/elisabeth-r-48283a239/" aria-label="Linkedin - Ouvre une nouvelle fenêtre"><svg className="svgPageAccueil" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="54px" height="54px"><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"/></svg></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/elisaRob?tab=repositories" aria-label="Github - Ouvre vers une nouvelle fenêtre"><svg className="svgPageAccueil" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="48px" height="48px" baseProfile="basic"><path fill="#0288d1" d="M38.5,20c0,10.299-8.391,18.5-18.5,18.5C9.892,38.5,1.5,30.299,1.5,20S9.701,1.5,20,1.5 S38.5,9.701,38.5,20z"/><path fill="#fff" d="M33.171,19.24c0,2.306-1.191,5.51-3.148,7.102c-1.582,1.289-3.672,1.695-6.034,1.823 c0.888,0.539,1.479,1.515,1.479,2.629v7.636C23.979,38.8,22.429,39,20.832,39c-1.582,0-3.127-0.195-4.606-0.565v-5.017 c-0.642,0.2-1.484,0.318-2.568,0.262c-3.595-0.19-4.108-2.372-4.683-3.913c-0.58-1.541-2.378-1.736-2.121-2.372 c1.241-0.426,2.215-0.02,2.874,0.482c0.523,0.398,0.887,0.961,1.131,1.571c0.279,0.697,1.02,1.86,2.86,1.86 c1.299,0,2.069-0.303,2.511-0.601c0.026-1.089,0.621-2.033,1.494-2.552c-2.506-0.159-4.704-0.632-6.321-2.039 c-1.797-1.561-2.881-4.678-2.881-6.876c0-1.833,0.755-4.093,2.049-5.515c0.041-0.041,0.077-0.087,0.128-0.128 c-0.298-0.894-0.642-2.66,0.195-4.822c2.49-0.046,4.457,1.315,5.258,1.972c1.448-0.334,3.03-0.493,4.694-0.493 c1.705,0,3.333,0.149,4.806,0.493c0.801-0.657,2.773-2.018,5.258-1.967c0.873,2.249,0.467,4.072,0.164,4.925 C32.401,15.229,33.171,17.391,33.171,19.24z"/><path fill="#788b9c" d="M20,39C9.523,39,1,30.477,1,20C1,9.346,9.346,1,20,1s19,8.346,19,19C39,30.477,30.477,39,20,39z M20,2C9.907,2,2,9.907,2,20c0,9.925,8.075,18,18,18s18-8.075,18-18C38,9.907,30.093,2,20,2z"/></svg></a>
          
        </div>

        <div className="menuIcon" onKeyDown={entreeSurClavier} onClick={toggle} tabIndex={0} aria-label="Menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`navigation ${isMenuOpen ? "menuOpen" : ""}`} >
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/competence">
                <i className="fas fa-mountain"></i>
                <span>Compétences</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/portefolio">
                <i className="fas fa-images"></i>
                <span>Portefolio</span>
              </NavLink>
            </li>
            <li onBlur={recupererLeDernierElement} ref={dernierFocus}>
              <NavLink exact to="/contact">
                <i className="fas fa-contact"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>

     
      <div id="finDuHeader"></div>

    </header>
   
  );
};

export default Navigation;

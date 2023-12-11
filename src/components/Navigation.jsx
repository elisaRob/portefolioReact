import { NavLink } from "react-router-dom";
import "../styles/navigation.css"

const Navigation = () => {
  return (
    <div className="sidebar">
      
      <div className="maPresentation">
        <img src="./media/img/photo.jpg" alt="Portait d'Elisabeth ROBERT AOUCHER" />
        <h3>Elisa ROBERT AOUCHER</h3>
      </div>

      <div className="navigation">
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
          <li>
            <NavLink exact to="/contact">
              <i className="fas fa-contact"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default Navigation;

import { useEffect, useState } from "react";
import "../styles/formation.css";

const Formation = () => {
  const [isOpenDropDownList, setOpenDropDownList] = useState({
    formationUdemy: false,
  });

  const toggleDropDown = (reference) =>
    setOpenDropDownList({
      ...isOpenDropDownList,
      [reference]: !isOpenDropDownList[reference],
    });

  useEffect(() => {
    console.log(isOpenDropDownList);
  }, [isOpenDropDownList]);

  return (
    <div className="maFormation">
      <h1>Ma formation</h1>
      <ul>
        <p className="titreLi">Formation Udemy{" "}<i className={"flecheBas"} onClick={() => toggleDropDown("formationUdemy")}></i>
        </p>
        <li className={ !isOpenDropDownList?.formationUdemy ? " openDropDown" : ""}>
          <ul className="sousListe">
            <li>
              <a href="https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/">
                CSS Animation
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/30-exercices-css/">
                30 exercices de CSS
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/sass-scss-la-formation-ultime/">
                SASS SCSS
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/conception-de-bases-de-donnees-et-langage-sql/">
                Conception de base de données et langage SQL
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/php-et-mysql-la-formation-ultime/">
                PHP et MySQL
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/formation-git-github/">
                Formation Git/Github
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/expressions-regulieres/">
                Expression régulière
              </a>
            </li>
          </ul>
        </li>
        <li className="titreLi">Formation OpenClassroom</li>
        <li>
          <p className="titreLi">
            Technicien développeur Bac+2 avec le CNAM (Unité d'enseignement
            universitaire) <i className="flecheBas" onClick={()=> toggleDropDown('technicienDeveloppeur')}></i>
          </p>
          <ul className="sousListe">
            <li>NFA031 - Programmation avec Java : notions de base</li>
            <li>NFA008 - Bases de données </li>
            <li>NFA040 - Architecture et langages Web </li>
            <li>
              MVA003 - Outils mathématiques pour l'informatique (Combinatoire,
              probabilités, ordre, calcul booléen)
            </li>
            <li>NFA004 - Architecture des machines </li>
            <li>NFA006 - Structures de données </li>
            <li>NFA010 - Graphes et optimisation </li>
            <li>NFA018 - Gestion de projet informatique </li>
            <li>NFA083 - Réseaux et administration web </li>
            <li>NFA084 - Graphisme et Web </li>
            <li>NFA042 - Développement web côté serveur </li>
            <li>NFA021 - Développement web (3) : mise en pratique </li>
            <li>
              NFA003 - Principes et fonctionnement des systèmes d'exploitation{" "}
            </li>
            <li>NFA032 - Programmation Java : programmation objet </li>
            <li>NFA035 - Programmation Java : bibliothèques et patterns </li>
          </ul>
        </li>
        <li className="titreLi">
          <a href="https://symfonycasts.com/">
            Abonnement et cours à SymfonyCast
          </a>
        </li>
        <li>
          <p className="titreLi">
            Fabrique du Numérique{" "}
            <i className="flecheBas" onClick={toggleDropDown}></i>
          </p>
          <ul className="sousListe">
            <li>Connaissances générales informatique</li>
            <li>HTML-CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Wordpress</li>
          </ul>
        </li>
        <li>
          <p className="titreLi">
            Stage chez <a href="https://www.webimpulse.fr/">Web Impulse</a>{" "}
            <i className="flecheBas" onClick={toggleDropDown}></i>
          </p>
          <ul className="sousListe">
            <li>HTML-CSS</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Aprentissage de Symfony</li>
            <li>Easy Admin</li>
          </ul>
        </li>
        <li>
          <p className="titreLi">
            Stage chez <a href="https://www.emandarine.com/">emmandarine</a>{" "}
            <i class="flecheBas" onClick={toggleDropDown}></i>
          </p>
          <ul className="sousListe">
            <li>HTML-CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>WordPress</li>
            <li>Elementor</li>
            <li>Création de plugins</li>
          </ul>
        </li>
        <li className="titreLi">Freelance avec emmandarine</li>
        <p>
          Création d'un site en créant un thème personalisé avec WordPress :
          WordPress/PHP/HTML/CSS/JavaScript
        </p>
        <li>
          <p className="titreLi">
            Stage chez <a href="https://www.ayaline.com/">Ayaline</a>{" "}
            <i className="flecheBas"></i>
          </p>
          <ul className="sousListe">
            <li>Accéssibilité / Performance</li>
            <li>React</li>
            <li>NextJs</li>
            <li>NodeJs</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Formation;

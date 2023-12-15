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

    <div className="maFormationContenu>">

      <h1>Mes formations et Expériences professionnelles</h1>

      <div className="formationsEtExperiencesProfessionnelles">

      <div className="mesFormations">

      <h2>Formations</h2>
      <ul>

        <li className="listePremiere">
          <p onClick={()=> toggleDropDown("formationUdemy")} className="titreLi">Formation Udemy{" "}<i className={"flecheBas"} onClick={() => toggleDropDown("formationUdemy")}></i>
          </p>
     
     
          <ul className={`sousListe ${ !isOpenDropDownList?.formationUdemy ? " openDropDown" : ""}`}>
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
  
        <li className="titreLi listePremiere">Formation OpenClassroom</li>
        <li className="listePremiere">
          <p className="titreLi" onClick={()=> toggleDropDown('technicienDeveloppeur')}>
            Technicien développeur Bac+2 avec le CNAM (Unité d'enseignement
            universitaire) <i className="flecheBas" onClick={()=> toggleDropDown('technicienDeveloppeur')}></i>
          </p>
          <ul className={`sousListe ${ !isOpenDropDownList?.technicienDeveloppeur ? " openDropDown" : ""}`}>
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
        <li className="titreLi listePremiere">
          <a href="https://symfonycasts.com/">
            Abonnement et cours à SymfonyCast
          </a>
        </li>


        <li className="listePremiere">
          <p className="titreLi" onClick={()=> toggleDropDown('fabriqueDuNumerique')}>
            Fabrique du Numérique{" "}
            <i className="flecheBas" onClick={()=> toggleDropDown('fabriqueDuNumerique')}></i>
          </p>
          <ul className={`sousListe ${ !isOpenDropDownList?.fabriqueDuNumerique ? " openDropDown" : ""}`}>
            <li>Connaissances générales informatique</li>
            <li>HTML-CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Wordpress</li>
          </ul>
        </li>
      </ul>

      </div>
     
      <div className="mesExperiencesProfessionnelles">

      <h2>Expériences professionnelles</h2>

      <ul>

        <li className="listePremiere">
          <p className="titreLi" onClick={()=> toggleDropDown('webImpulse')}>
            Stage chez <a href="https://www.webimpulse.fr/">Web Impulse</a>{" "}
            <i className="flecheBas" onClick={()=> toggleDropDown('webImpulse')}></i>
          </p>
          <ul className={`sousListe ${ !isOpenDropDownList?.webImpulse ? " openDropDown" : ""}`}>
            <li>HTML-CSS</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Aprentissage de Symfony</li>
            <li>Easy Admin</li>
          </ul>
        </li>
        <li className="listePremiere">
          <p className="titreLi" onClick={()=> toggleDropDown('emmandarine')}>
            Stage chez <a href="https://www.emandarine.com/">emmandarine</a>{" "}
            <i class="flecheBas" onClick={()=> toggleDropDown('emmandarine')}></i>
          </p>
          <ul className={`sousListe ${ !isOpenDropDownList?.emmandarine ? " openDropDown" : ""}`}>
            <li>HTML-CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>WordPress</li>
            <li>Elementor</li>
            <li>Création de plugins</li>
          </ul>
        </li>
        <li className="titreLi listePremiere" onClick={()=> toggleDropDown('freelance')}>Freelance avec emmandarine <i className="flecheBas" onClick={()=> toggleDropDown('freelance')}></i>
          <ul className={`sousListe ${ !isOpenDropDownList?.freelance ? " openDropDown" : ""}`}>
            <li>Création d'un site en créant un thème personalisé</li>
            <li>WordPress</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </li>
    
        <li className="listePremiere">
          <p className="titreLi" onClick={()=> toggleDropDown('ayaline')}>
            Stage chez <a href="https://www.ayaline.com/">Ayaline</a>{" "}
            <i className="flecheBas" onClick={()=> toggleDropDown('ayaline')}></i>
          </p>
          <ul className={`sousListe ${ !isOpenDropDownList?.ayaline ? " openDropDown" : ""}`}>
            <li>Accéssibilité / Performance</li>
            <li>React</li>
            <li>NextJs</li>
            <li>NodeJs</li>
          </ul>
        </li>
      </ul>
      </div>
      </div>

      </div>      
      
    </div>
  );
};

export default Formation;

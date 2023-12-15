import "../styles/knoweldges.css"

const Knoweldges=()=>{
    return(

        <div className="mesCompetenceEtMesQualites">
            <div className="mesCompetencesEtMesQualitesContenu">

                <h1 className="titreH1">Mes compétences et mes qualités</h1>         

                <div className="contenu">

               
                    <div className="mesCompetences">

                        <h2>Mes compétences</h2>
                        <div className="partieFrontEnd">
                            <h3>Front-end</h3>
                            <ul>
                                <li>HTML-CSS</li>
                                <li>JavaScript</li>
                                <li>Bootstrap</li>
                                <li>React</li>
                                <li>SASS</li>
                                <li>Affinity Designer</li>
                            </ul>
                        </div>

                        <div className="partieBackEnd">
                            <h3>Back-end</h3>

                            <ul>
                                <li>PHP</li>
                                <li>Symfony</li>
                                <li>Base de données</li>
                                <li>Langage SQL</li>
                                <li>Java</li>
                            </ul>
                        </div>

                        <div className="gestionDeProjet">
                        <h3>Gestion de projet</h3>
                        <ul>
                            <li>Base sur la gestion de projet</li>
                            <li>Scrum</li>
                        </ul>
                    </div>

                    <div className="outils">
                        <h3>Outils</h3>
                        <ul>
                            <li>Visual Studio Code</li>
                            <li>PHP Storm</li>
                            <li>Git/Github</li>
                        </ul>
                    </div>

                    <div className="cms">
                        <h3>CMS</h3>
                        <ul>
                            <li>Wordpress</li>
                            <li>Elementor</li>
                            <li>Création de thème wordpress personalisé</li>
                        </ul>
                    </div>

                </div>

                   
                <div className="mesQualites">
                    <h2>Mes qualités</h2>
                    <ul>
                        <li>Bosseuse</li>
                        <li>Rigoureuse</li>
                        <li>Travail en autonomie</li>
                        <li>Résolution de problèmes</li>
                        <li>Apprendre facilement des nouvelles technologies et m'adapter</li>
                    </ul>
                </div>


                <div className="monCv">
                    <h2>Mon Cv</h2>
                    <button>
                        <a href="../public/media/cv/monCv.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                    </button>
                </div>
            
                </div>
        
            </div>
          
           
        </div>
     
    )
}

export default Knoweldges;
import "../styles/knoweldges.css"

const Knoweldges=()=>{
    return(

        <div className="mesCompetenceEtMesQualites">
            <h1 className="titreH1">Mes compétences et mes qualités</h1>
        
         

             

                <div className="mesCompetences">

                    <h2>Mes compétences</h2>
                    <div className="partieFrontEnd">
                        <h3>Front-end</h3>
                        <ul>
                            <li>HTML-CSS</li>
                            <li>JavaScript</li>
                            <li>Affinity Designer</li>
                        </ul>
                    </div>

                    <div className="partieBackEnd">
                        <h3>Back-end</h3>
                    </div>

                </div>

                <div className="gestionDeProjet">
                    <h3>Gestion de projet</h3>
                </div>

                <div clasName="outils">
                    <h3>Outils</h3>
                </div>

                <div className="autres">
                    <h3>Autres</h3>
                </div>

         

            <div className="mesQualites">
                <h2>Mes qualités</h2>
            </div>


            <div className="monCv">
                <h2>Mon Cv</h2>
                <button>
                    <a href="../public/media/cv/monCv.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                </button>
            </div>
          
           
        </div>
     
    )
}

export default Knoweldges;
import "../styles/home.css";



const Home=()=>{
    return(
       <main className="accueil">
            <section className="quiSuisJe">
                <section>
                    <span>Elisabeth ROBERT AOUCHER</span>
                    <h1>Développeuse Web sur Poitiers</h1>   
                </section>
            
                <section className="paragrapheQuiSuisJeEtPhoto">
                    <p>
                       Bonjour,<br/><br/>
                        J'ai 34 ans et je suis développeuse web. Mon parcours professionnel a débuté dans le domaine médical. <br/>
                        Cependant, j'ai décidé de réaliser mon rêve en me reconvertissant dans le développement web. Animée par une motivation exceptionnelle, je travaille avec acharnement et je m'immerge profondément dans chaque sujet.
                         <br/><br/>
                         <strong>Ma détermination et mon esprit travailleur</strong> sont des caractéristiques qui me définissent, faisant de moi une personne résolue et engagée.<br/>
                          J'ai entamé ma formation en autodidacte, et actuellement, je poursuis une formation professionnelle au CNAM où je travaille à l'obtention du diplôme bac+2 de<a aria-label="Lien page du CNAM - Ouvre dans une nouvelle fenêtre" target="_blank" className="lienUtile" href="https://cnam-idf.fr/formations/hors-temps-de-travail/diplomes/titre-rncp-niveau-5-concepteur-developpeur-de-solutions-informatiques-crn0700a"> technicien developpeur avec le CNAM</a>.<br/>
                         J'ai suivi en parallèle la formation de <a aria-label="Lien page de la Fabrique du Numérique - Ouvre dans une nouvelle fenêtre" target="_blank" className="lienUtile" href="https://fabdunum.fr/">la Fabrique du Numérique</a> qui m'a beaucoup considérablement aidée à perfectionner mes compétences. 
                        <br></br>Je suis une <strong>travailleuse acharnée,</strong> <strong> une personne fidèle</strong> avec <strong>l'esprit d'équipe</strong> toujours prete à <strong>rendre service et à aider les autres.</strong>
                        <br/><br/>Je souhaite trouver <strong>un poste, faire une alternance, ou un stage longue durée (6 mois)</strong>, je suis ouverte à la proposition
                        de CDD car les solutions <strong>AFPR et POEI de pôle emploi</strong> permettent de soutenir les entreprises qui sont prêtes à former leurs futurs employés.
                    </p>
                    
                    <img width="300" height="400" loading="eager" decoding="sync" src="./assets/media/img/photo.webp" alt="photo de moi" />
                </section>
            </section>         
       </main>
    ) 
}

export default Home;
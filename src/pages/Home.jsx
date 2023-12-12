import "../styles/home.css";



const Home=()=>{
    return(
       <div className="accueil">
            <div className="quiSuisJe">
                <span>Elisabeth ROBERT AOUCHER</span>
                <h1>Développeuse Web</h1>    
                <button>
                    <a href="../public/media/cv/monCv.pdf" target="_blank" rel="noopener noreferrer">Télécharger mon CV</a>
                </button>
            </div>         
            <img src="../public/media/img/montagne.jpg" alt=""/>
       </div>
    ) 
}

export default Home;
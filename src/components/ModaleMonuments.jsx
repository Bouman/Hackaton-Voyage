import monumentList from '../Data/MonumentList';
import "../components/ModaleMonuments.css";

function ModaleMonuments ({id, picture, monumentName, monumentType, monumentSize, countryOfMonument, constructionDate, visitorNumber, symbolique, author, cityOfMonument, changeTexte}) {
    return (
    <>
        <div className='main_div'>
            <div key={id}>
                <img className='monument_image' src={picture} alt="Description des  monuments"/>
                    <div className='description'>
                        <div className='monumentTitle'>{monumentName}</div>
                        <div className='monumentType'>Type de monument: {monumentType}</div>
                        <div className='monumentSize'>Taille: {monumentSize}</div>
                        <div className='monumentCountry'>Pays: {countryOfMonument}</div>
                        <div className='constructionDate'>Date de construction: {constructionDate}</div>
                        <div className='visitorNumber'>Nombre de visiteurs: {visitorNumber}</div> 
                        <div className='symbol'>Symbolique: {symbolique}</div> 
                        <div className='author'>Auteur: {author}</div>   
                        <div className='cityName'>Ville: {cityOfMonument}</div>
                        <p>{`${monumentName}. Ce monument est situé en ${monumentList[changeTexte].cityOfMonument} en ${monumentList[changeTexte].countryOfMonument}. Il a été réalisé par ${author} ${constructionDate}. Mesurant près de ${monumentSize}, symbolisant ${monumentList[changeTexte].symbolique}, ${monumentList[id].monumentType} qui ammène de nombreux touristes chaque année, environ ${visitorNumber}, et alimente toujours l'imagination des Hommes.`} 
                        </p>
                    </div>
            </div>
        </div>
    </>
    )
}
export default ModaleMonuments;
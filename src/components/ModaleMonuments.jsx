import React from 'react';
import monumentList from '../Data/MonumentsList';

function ModaleMonuments ({id, picture, monumentName, monumentType, monumentSize, countryOfMonument, constructionDate, visitorNumber, symbolique, author, cityOfMonument, changeTexte}) {
    
    return (
    <>
        <div className='main_div'>
            <div key={id}>
                <img className='monument_image' src={picture} alt="Description des  monuments"/>
                    <div className='description'>
                        <div className='monumentTitle'>{monumentName}</div>
                        <div className='monumentType'>{monumentType}</div>
                        <div className='monumentSize'>{monumentSize}</div>
                        <div className='monumentCountry'>{countryOfMonument}</div>
                        <div className='constructionDate'>{constructionDate}</div>
                        <div className='visitorNumber'>{visitorNumber}</div> 
                        <div className='symbol'>{symbolique}</div> 
                        <div className='author'>{author}</div>   
                        <div className='cityName'>{cityOfMonument}</div>
                        <p>{`${monumentName}. Ce monument est situé en ${monumentList[changeTexte].cityOfMonument} en ${monumentList[changeTexte].countryOfMonument}. Il a été réalisé par ${author} ${constructionDate}. Mesurant près de ${monumentSize}, symbolisant ${monumentList[changeTexte].symbolique}, ${monumentList[id].monumentType} qui ammène de nombreux touristes chaque année, environ ${visitorNumber}, et alimente toujours l'imagination des Hommes.`} 
                        </p>
                    </div>
            </div>
        </div>
    </>
    )
}
export default ModaleMonuments;
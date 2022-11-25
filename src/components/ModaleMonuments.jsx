
import React, { useContext } from 'react';
import Context from '../contexts/Context';
import monumentList from '../Data/MonumentList'
import "../assets/css/ModaleMonuments.css"

function ModaleMonuments({ id }) {
  const { openMouseOver, setOpenMouseOver } = useContext(Context);
  if (openMouseOver !== id) return null
  return (
    <div className='main_div'>
      <div key={monumentList[id].id}>
        <img className='monument_image' src={monumentList[id].picture} alt="Description des  monuments" />
        <div className='description'>
          <div className='monumentTitle'>{monumentList[id].monumentName}</div>
          <div className='monumentType'>{monumentList[id].monumentType}</div>
          <div className='monumentSize'>{monumentList[id].monumentSize}</div>
          <div className='monumentCountry'>{monumentList[id].countryOfMonument}</div>
          <div className='constructionDate'>{monumentList[id].constructionDate}</div>
          <div className='visitorNumber'>{monumentList[id].visitorNumber}</div>
          <div className='symbol'>{monumentList[id].symbolique}</div>
          <div className='author'>{monumentList[id].author}</div>
          <div className='cityName'>{monumentList[id].cityOfMonument}</div>
          <p>{`${monumentList[id].monumentName}. Ce monument est situé en ${monumentList[id].cityOfMonument} en ${monumentList[id].countryOfMonument}. Il a été réalisé par ${monumentList[id].author} ${monumentList[id].constructionDate}. Mesurant près de ${monumentList[id].monumentSize}, symbolisant ${monumentList[id].symbolique},  qui ammène de nombreux touristes chaque année, environ ${monumentList[id].visitorNumber}, et alimente toujours l'imagination des Hommes.`}
          </p>
          <div onClick={(e) => {
            e.stopPropagation()
          }}>
            <button
              type="button"
              className="Modale-close"
              onClick={() => setOpenMouseOver(30)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModaleMonuments;
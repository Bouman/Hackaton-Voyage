import React from 'react';
import ModaleMonuments from './ModaleMonuments';
import "./ModaleMonuments.css";
import monumentList from '../Data/MonumentList';

function ModaleMonuments () {

    return (
        <div className='main_div'>
            {monumentList.map((monumentList,id) =>
                <img className='monument_image' src={monumentList.picture} />
                    <div className='description'>
                        <div className='monumentTitle'>{monumentList.MonumentName}</div>
                        <div className='monumentType'>{monumentList.monumentType}</div>
                        <div className='monumentSize'>{monumentList.monumentSize}</div>
                        <div className='monumentCountry'>{monumentList.countryOfMonument}</div>
                        <div className='constructionDate'>{monumentList.constructionDate}</div>
                        <div className='visitorNumber'>{monumentList.visitorNumber}</div> 
                        <div className='symbol'>{monumentList.symbolique}</div> 
                        <div className='author'>{monumentList.author}</div>   
                        <div className='cityName'>City</div>
                        {/*passer les props pour chaque catégorie dans la description*/}
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur repellendus natus, temporibus cum excepturi vel aliquam quia ad voluptas ipsam, quae accusantium eos magnam consectetur quos nostrum recusandae, a impedit!</p>
                    </div>
            )}
        </div>
    )
}
export default ModaleMonuments;
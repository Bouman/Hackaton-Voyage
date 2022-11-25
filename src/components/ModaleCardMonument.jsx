import monumentList from "../Data/MonumentList";


function ModaleCardMonuments ({id, openMouseOver, setOpenMouseOver}) {
    const filtered = monumentList.filter((filterid)=> filterid.id === id)
    if(openMouseOver != id) return null
    return (
    <>
        <div className='main_div'>
        <div key={filtered.id}>
            <img className='monument_image' src={filtered.picture} alt="Description des  monuments"/>
              <div className='description'>
        <div className='monumentTitle'>{filtered.monumentName}</div>
        <div className='monumentType'>{filtered.monumentType}</div>
        <div className='monumentSize'>{filtered.monumentSize}</div>
        <div className='monumentCountry'>{filtered.countryOfMonument}</div>
        <div className='constructionDate'>{filtered.constructionDate}</div>
        <div className='visitorNumber'>{filtered.visitorNumber}</div> 
        <div className='symbol'>{filtered.symbolique}</div> 
        <div className='author'>{filtered.author}</div>   
        <div className='cityName'>{filtered.cityOfMonument}</div>
        <p>{`${filtered.monumentName}. Ce monument est situé en ${filtered.cityOfMonument} en ${filtered.countryOfMonument}. Il a été réalisé par ${filtered.author} ${filtered.constructionDate}. Mesurant près de ${filtered.monumentSize}, symbolisant ${filtered.symbolique},  qui ammène de nombreux touristes chaque année, environ ${filtered.visitorNumber}, et alimente toujours l'imagination des Hommes.`} 
        </p>
        <p onClick = {()=>setOpenMouseOver('')}>X</p>
    </div>
</div> 
        </div>
    </>
    )
}
export default ModaleCardMonuments;


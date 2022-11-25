
import React, { useContext, useEffect, useState } from 'react';
import Context from '../contexts/Context';
import monumentList from '../Data/MonumentList'
import "../assets/css/ModaleMonuments.css"

function ModaleMonuments({ id, monumentPosition }) {
    const { openMouseOver, setOpenMouseOver, order, isLoading, setIsLoading } = useContext(Context);
     const [data, setData] = useState();
    useEffect(() => {
        if(openMouseOver === id){
            let lieu = order[id-1];
            // POST request using fetch inside useEffect React hook
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`);
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "prompt": `${monumentList[id-1].monumentName} à ${lieu}`,
                "n": 1,
                "size": "1024x1024"
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("https://api.openai.com/v1/images/generations", requestOptions)
                .then(response => response)
                .then(result => setData(result)
                )
                .catch(error => console.log('error', error)
            );
            if(data){
                setIsLoading(true);
            }
            // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }
    }, [openMouseOver, isLoading]);

    console.log(data)

    if(openMouseOver !== id){
        return null
    };

    function chaineFunction() {
        setIsLoading(false);
        setOpenMouseOver(null);
    }

    
    // 

    return (
        <div className='main_div'>
        <div className='modale-containt' key={monumentList[id-1].id}>
            <div  className='monument_image' style={{backgroundImage: `url(${monumentList[monumentPosition].picture}`, backgroundSize:"contain"}}>
            <img src={monumentList[id-1].batiment} alt="Description des monuments"  style={{width:"300px"}}/>
            </div>
            <div className='description'>
            <p>{`Je suis ${monumentList[id-1].monumentName}, situé ${monumentList[monumentPosition].cityOfMonument} ${monumentList[monumentPosition].countryOfMonument}. Je fus réalisé par ${monumentList[monumentPosition].author} ${monumentList[id-1].constructionDate}. Mesurant près de ${monumentList[id-1].monumentSize}, symbolisant ${monumentList[monumentPosition].symbolique},  qui ammène de nombreux touristes chaque année, environ ${monumentList[id-1].visitorNumber}, et alimente toujours l'imagination des Hommes.`}
            </p>
            <div                 className="Modale-close" onClick={(e) => {
                e.stopPropagation()
            }}>
                <button
                type="button"

                onClick={chaineFunction}
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
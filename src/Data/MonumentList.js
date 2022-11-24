// import tour_eiffel_site from '../assets/img/tour_eiffel_site.jpg';
// import liberte from '../assets/img/liberte.jpg';
// import taj_mahal_site from '../assets/img/taj_mahal_site.jpg';
// import christ from '../assets/img/christ.png.jpg';
// import cite_interdite_site from '../assets/img/cite_interdite_site.jpg';
// import pyramides_site from '../assets/img/pyramides_site.jpg';
// import paques from '../assets/img/paques.jpg';

const monumentList = [
    {
        id : 1,
        monumentName : 'la tour Eiffel',
        monumentType : "Une tour autoportante en fer",
        monumentSize : "324 metres",
        cityOfMonument : "Paris",
        countryOfMonument : "France",
        constructionDate : "le 31 mars 1889",
        picture : '',
        visitorNumber : "7 millions par an",
        symbolique : "le savoir-faire français",
        author : "Gustave Eiffel",
    },
    {
        id : 2,
        monumentName : 'la Statue de la Liberté',
        monumentType : "c'est une statue monumentale",
        monumentSize : "93 metres",
        cityOfMonument : "New York",
        countryOfMonument : "Etats-Unis",
        constructionDate : "le 28 octobre 1886",
        picture : '',
        visitorNumber : "4 millions de visiteurs par an",
        symbolique : "la Liberté des peuples dans le Monde",
        author : "Gustave Eiffel",
    },
    {
        id : 3  ,
        monumentName : "Le Taj Mahal",
        monumentType : "Un mausolée",
        monumentSize : "73 metres",
        cityOfMonument : "Agra",
        countryOfMonument : "Inde",
        constructionDate : "entre 1631 et 1653",
        picture : "",
        visitorNumber : "7 millions de visiteurs par an",
        symbolique : "un amour éternel",
        author : "Shah Jahan",
    },
    {
        id :  4 ,
        monumentName : "Le Christ rédempteur",
        monumentType : "c'est une statue monumentale",
        monumentSize : "38 metres",
        cityOfMonument : "rio de janeiro",
        countryOfMonument : "Braisil",
        constructionDate : "le 12 octobre 1931",
        picture : "",
        visitorNumber : "600 milles par an",
        symbolique : "la ferveur religieuse du Brasil",
        author : "Paul Landowski",
    },
    {
        id : 5,
        monumentName : "La Cité interdite",
        monumentType : "C'est un Palais",
        monumentSize : "35 mètres",
        cityOfMonument : "Pékin",
        countryOfMonument : "Chine",
        constructionDate : "entre 1406 et 1420",
        picture : "",
        visitorNumber : "10 millions par an",
        symbolique : "la puissance de l'empire féodale chinois",
        author : "Zhang Yimou",
    },
    {
        id : 6 ,
        monumentName : "Les Pyramides du plateau de Gizeh",
        monumentType : "C'est des Tombeaux royaux",
        monumentSize : "136 mètres",
        cityOfMonument : "Egypte",
        countryOfMonument : "Plateau de Gizeg",
        constructionDate : "entre -2560 et -1526 avant J-C",
        picture : "",
        visitorNumber : "10 millions par ans",
        symbolique : "la grandeur de l'Ancien empire égyptien",
        author : "des esclaves des Pharaons",
    },
    {
        id : 7,
        monumentName : "Le Colisée",
        monumentType : "C'est une arène antique",
        monumentSize : "48 metres",
        cityOfMonument : "Rome",
        countryOfMonument : "Italie",
        constructionDate : "en l'an 80",
        picture : "",
        visitorNumber : "6 millons/an",
        symbolique : "la force du peuple, la toute-puissance romaine",
        author : "Vespasien Titus",
    },
    {
        id : 8,
        monumentName : "La tour de Londres",
        monumentType : "C'est un palais royal",
        monumentSize : "222 metres",
        cityOfMonument : "Londres",
        countryOfMonument : "Royaume-Uni",
        constructionDate : "en 1078",
        picture : "",
        visitorNumber : "2.5 Millions par an",
        symbolique : "la monarchie britannique",
        author : "Guillaume le Conquérant",
    },
    {
        id : 8,
        monumentName : "Le temple du Bouddha d'émeraude",
        monumentType : "c'est un site religieux",
        monumentSize : "11 metres",
        cityOfMonument : "Thaïlande",
        countryOfMonument : "République de Thaïlande",
        constructionDate : "entre 1782-1784",
        picture : "",
        visitorNumber : "8 millions par ans",
        symbolique : "la religion bouddhiste",
        author : "Râma Ier" , 
    },
    {
        id : 9,
        monumentName : "Les statues de l'île de Pâques",
        monumentType : "c'est site religieux",
        monumentSize : "2 à 8m de haut",
        cityOfMonument : " l'île de Pâques ",
        countryOfMonument : "Chili",
        constructionDate : "entre le 13e-15e siecle",
        picture : "",
        visitorNumber : "80000 par ans",
        symbolique : "le culte des Moaïs",
        author : "des sculpteurs Polynésiens",
    },
]

export default monumentList;


console.log(monumentList.map((e) =>
`${e.monumentName} est situé à ${e.cityOfMonument} en ${e.countryOfMonument}. Elle a était réalisée par ${e.author} ${e.constructionDate}. Mesurant près de ${e.monumentSize} symbolisant ${e.symbolique}, ${e.monumentType} qui ammène de nombreux touristes chaque années, environs ${e.visitorNumber}, qui alimente toujours l'imagination des Hommes. 
`

))
//1 Consumir API
//Usandio Axios

//2 Resolver la promesa(en una variable)

//3 Crear un objeto que obtenga el dato deseado
//4 Utilizar module.exports
const axios = require("axios");

const monedas = async (req, res) => {
    try {
        const monedaDolar = await axios(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        console.log(monedaDolar);

    } catch (error){
        console.log(error);

    }
}

module.exports





// .then(promesaFetch => promesaFetch.json())
// .then(contenido => console.log(contenido));

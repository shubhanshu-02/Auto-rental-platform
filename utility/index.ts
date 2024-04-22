// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//   params: {model: 'corolla'},
//   headers: {
//     'X-RapidAPI-Key': '8958fcf7f8msh57cf40ab167d7afp15810ejsn2f29d6c613d4',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// } 


export async function getCars(){
    const headers = {
        'X-RapidAPI-Key': '8958fcf7f8msh57cf40ab167d7afp15810ejsn2f29d6c613d4',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'    
    }
    const response = await fetch ("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=x5", {headers : headers,});
    const result = await response.json();

    return result;
}

// import axios from 'axios';

// export async function getCars() {
//     const headers = {
//         'X-RapidAPI-Key': '8958fcf7f8msh57cf40ab167d7afp15810ejsn2f29d6c613d4',
//         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//     };

//     try {
//         const response = await axios.get('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { headers });
//         return response.data;
//     } catch (error) {
//         // Handle error here
//         console.error('Error fetching cars:', error);
//         throw error; // Optionally rethrow the error
//     }
// }

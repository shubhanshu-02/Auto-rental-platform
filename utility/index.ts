export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


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

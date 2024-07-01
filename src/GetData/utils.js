const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_API_KEY;

export const getWeather = async()=>{
    try{
        const response = await fetch( `${baseUrl}/v1/forecast.json? key=${apiKey}`)
return response.json();
    } 
    catch (error){
        throw new Error(error.message);
    }

};p
import {getWeather} from "../utils";
import { useState,useEffect } from "react";

export const userGetWeather = ()=>{
    const [forecast,setForecast] = useState([]);
    const [error,setErrors] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(()=>{

        const fetchWeather = async ()=>{
            try{
                setLoading(true);
                const response = await getWeather();
                setForecast(response.forecast);
                setLoading(false);

            }
            catch (error){
                setLoading(false);
                setErrors(`Error: ${error.message}`)
            }
        }
        fetchWeather();
    },[])
    return{forecast,error,loading}
}
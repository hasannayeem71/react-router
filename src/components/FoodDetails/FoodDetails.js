import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
const FoodDetails = () => {
    const {idMeal} = useParams(); 
    const [meal,setMeal]=useState([]);

    const history = useHistory()

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res=>res.json())
        .then(data=>setMeal(data.meals[0]))
    },[idMeal])
   
const handleback=()=>{
history.push('/');
}

    return (
        <div>
            <button className="btn btn-info mt-3 ms-4" onClick={handleback}>Back</button>
            <div className='d-flex justify-content-center p-5 pt-2'>
            <img className='img-fluid' src={meal.strMealThumb} alt="" />
            </div>
            <div className='p-5 pt-0'>
                <h1 className='text-center'>{meal.strMeal}</h1>
                <p>{meal.strInstructions}</p>
                <a href={meal.strYoutube} target="_blank" rel="noreferrer">More on youtube</a>
            </div>
        </div>
    );
};

export default FoodDetails;
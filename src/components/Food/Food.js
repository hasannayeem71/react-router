import React from "react";
import { useHistory } from "react-router-dom";

const Food = (props) => {
    const { idMeal,strMeal, strMealThumb, strInstructions } = props.food;

    const url =`/food/${idMeal}`;
    let history = useHistory()
    const handleButton = ()=>{
       history.push(url);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top p-2" src={strMealThumb} alt="" />
                <div className="card-body">
                    <h1 className="card-title text-center">{strMeal}</h1>
                    <p className="card-text">{strInstructions.slice(0, 150)}</p>
                </div>
                <button className="border-0 bg-info" onClick={handleButton}>See details</button>
            </div>
        </div>
    );
};

export default Food;

import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Search from '../Search/Search';

const Restorents = () => {
    const [foods,setFoods]= useState([]);
    const [searchText , setSearchText] = useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.meals){
                setFoods(data.meals)
            }
        });
    },[searchText]);

   

    const handleSearch = (event)=>{
        const searchText = event.target.value;
        setSearchText(searchText);
    }

    return (
        <>
        <Search handleSearch={handleSearch}/>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-2 p-3">
            {
                foods.map(food=><Food food={food} key={food.idMeal}  />)
            }
            
        </div>
        </>
    );
};

export default Restorents;
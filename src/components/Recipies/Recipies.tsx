import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Recipies.modules.css'

export default function Recipies() {
  let [meals, setMeals] = useState([]);
  const getMeals = async()=>{
  try {
      let response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
      setMeals(response.data.meals);
      console.log(meals);
    } catch (error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
    <div className="container p-5">
    <h1  className='text-center title'>RECIPIES</h1>
    <div className="row">
        {
    meals.map((meal: any)=>(
   
        <div  key={meal.id}  className="col-lg-4">
      <div className="card m-1">
      <img src={meal.strMealThumb} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{meal.strMeal}</h5>
        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
           since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      </div>
    </div>
     </div>
   
  ))
}  </div>
       
    </div>
  
   
  </>
  )
  }

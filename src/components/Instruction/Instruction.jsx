import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './instruction.css';

export const Instruction = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal:', error);
      }
    };

    fetchMeal();
  }, [id]);

  return (
    <div className="meal-detail">
      {meal && (
        <>
          <section className="meal-detail-base-info-block">
            <div className="meal-detail-base-info-text">
              <p className="title">{meal.strMeal}</p>
              <p className="meal-detail-base-info">{meal.strCategory} | {meal.strArea}</p>
              <div className="ingredients">
                {meal.strIngredient1 && <p>- {meal.strIngredient1} <b>{meal.strMeasure1}</b></p>}
                {meal.strIngredient2 && <p>- {meal.strIngredient2} <b>{meal.strMeasure2}</b></p>}
                {meal.strIngredient3 && <p>- {meal.strIngredient3} <b>{meal.strMeasure3}</b></p>}
                {meal.strIngredient4 && <p>- {meal.strIngredient4} <b>{meal.strMeasure4}</b></p>}
                {meal.strIngredient5 && <p>- {meal.strIngredient5} <b>{meal.strMeasure5}</b></p>}
                {meal.strIngredient6 && <p>- {meal.strIngredient6} <b>{meal.strMeasure6}</b></p>}
                {meal.strIngredient7 && <p>- {meal.strIngredient7} <b>{meal.strMeasure7}</b></p>}
                {meal.strIngredient8 && <p>- {meal.strIngredient8} <b>{meal.strMeasure8}</b></p>}
                {meal.strIngredient9 && <p>- {meal.strIngredient9} <b>{meal.strMeasure9}</b></p>}
                {meal.strIngredient10 && <p>- {meal.strIngredient10} <b>{meal.strMeasure10}</b></p>}
              </div>
            </div>
            <div className="meal-detail-base-info-img">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
          </section>
          <section className="meal-detail-instruction">
            <h2 className="h2">Instruction</h2>
            <pre>{meal.strInstructions}</pre>
            {meal.strYoutube && (
              <a className="meal-detail-youtube" href={meal.strYoutube}>Watch on YouTube</a>
            )}
          </section>
        </>
      )}
    </div>
  );
};

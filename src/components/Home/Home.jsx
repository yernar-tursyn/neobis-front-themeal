import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css';

export const Home = () => {
  const [meal, setMeal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching random meal:', error);
      }
    };

    fetchRandomMeal();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    setNoResults(false);

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const results = response.data.meals || [];
      setSearchResults(results);
      if (results.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      console.error('Error searching meals:', error);
      setNoResults(true);
    }
  };

  return (
    <div>
      <div className="home">
        {meal && (
          <section className="random-meal-block">
            <div className="random-meal-block-text">
              <h2 className="h2">Meal of the Day</h2>
              <p className="title">
                <Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
              </p>
              <p className="random-meal-info">{meal.strCategory} | {meal.strArea}</p>
            </div>
            <div className="random-meal-block-img">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
          </section>
        )}
        <h2 className="h2">Find your Meal</h2>
        <form className="search-block" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Find your meal"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="search-results">
          {noResults && <div>No Results</div>}
          {searchResults.map((result) => (
            <Link to={`/meal/${result.idMeal}`} key={result.idMeal} className="search-result-item">
              <div className="meal-block">
                <img
                  src={result.strMealThumb}
                  alt={result.strMeal}
                />
                <div>
                  <h3 className="h3">{result.strMeal}</h3>
                  <p className="meal-block-info">{result.strCategory} | {result.strArea}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

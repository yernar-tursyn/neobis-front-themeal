import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
  return (
    <div>
      <div className="home">
        <section className="random-meal-block">
          <div className="random-meal-block-text">
            <h2 className="h2">Meal of the Day</h2>
            <p className="title">
              <Link to="/52849">Spinach & Ricotta Cannelloni</Link>
            </p>
            <p className="random-meal-info">Vegetarian | Italian</p>
          </div>
          <div className="random-meal-block-img">
            <img
              src="https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg"
              alt="Spinach & Ricotta Cannelloni"
            />
          </div>
        </section>
        <h2 className="h2">Find your Meal</h2>
        <form className="search-block">
          <input type="tel" placeholder="Find your meal" />
          <button type="submit">Search</button>
        </form>
        <div>
          <a className="" href="/52843">
            <div className="meal-block">
              <img
                src="https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg"
                alt="Lamb Tagine"
              />
              <div>
                <h3 className="h3">Lamb Tagine</h3>
                <p className="meal-block-info">Lamb | Moroccan</p>
              </div>
            </div>
          </a>
          <a className="" href="/52843">
            <div className="meal-block">
              <img
                src="https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg"
                alt="Lamb Tagine"
              />
              <div>
                <h3 className="h3">Lamb Tagine</h3>
                <p className="meal-block-info">Lamb | Moroccan</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

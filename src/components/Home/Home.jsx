import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <div>
       <div className="home">
            <section className="random-meal-block">
                <div className="random-meal-block-text">
                    <h2 className="h2">Meal of the Day</h2>
                    <p className="title">
                        <a href="/52849">Spinach &amp; Ricotta Cannelloni</a>
                    </p>
                    <p className="random-meal-info">Vegetarian | Italian</p>
                </div>
                <div className="random-meal-block-img">
                    <img src="https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg" alt="Spinach &amp; Ricotta Cannelloni" />
                </div>
            </section>
            <h2 className="h2">Find your Meal</h2>
            <form className="search-block">
                <input type="tel" placeholder="Find your meal" />
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}

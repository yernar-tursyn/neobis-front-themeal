import React from 'react';
import './instruction.css';

export const Instruction = () => {
  return (
    <div className="meal-detail">
      <section className="meal-detail-base-info-block">
        <div className="meal-detail-base-info-text">
          <p className="title">Banana Pancakes</p>
          <p className="meal-detail-base-info">Dessert | American</p>
          <div className="ingredients">
            <p>- Banana <b>1 large</b></p>
            <p>- Eggs <b>2 medium</b></p>
            <p>- Baking Powder <b>pinch</b></p>
            <p>- Vanilla Extract <b>sprinkling</b></p>
            <p>- Oil <b>1 tsp</b></p>
            <p>- Pecan Nuts <b>25g</b></p>
            <p>- Raspberries <b>125g</b></p>
          </div>
        </div>
        <div className="meal-detail-base-info-img">
          <img 
            src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg" 
            alt="Banana Pancakes" 
          />
        </div>
      </section>
      <section className="meal-detail-instruction">
        <h2 className="h2">Instruction</h2>
        <pre>
{`In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla.
Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries.`}
        </pre>
        <a className="meal-detail-youtube" href="https://www.youtube.com/watch?v=kSKtb2Sv-_U">Watch on YouTube</a>
      </section>
    </div>
  );
};

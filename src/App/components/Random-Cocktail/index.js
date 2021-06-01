import React, { useState, useEffect } from 'react';
import { getRandomCocktail } from '../../../utils/api-util.js';
import { DrinkCard } from '../DrinkCard/index.js';
import "./index.css"


export const RandomCocktail = () => {
    const [randomDrink, setRandomDrink] = useState(undefined);

    const newRandom = async () => {
        const cocktail = await getRandomCocktail();
        setRandomDrink(cocktail);
    }

    useEffect(() => newRandom(), []);

    if (randomDrink === undefined) {
        return <div>Drink not loaded yet!</div>;
    }

    return (
        <div>
            <h2 id="home-header">A Random  Drink</h2>
            <DrinkCard drink={randomDrink} />
            <h3 class="new-random" onClick={() => newRandom()}>
                Not a fan of {randomDrink.strDrink}?
                <br />
                Click here to get a different drink!
            </h3>
        </div>        
    )
};


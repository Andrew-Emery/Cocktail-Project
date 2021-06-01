import React, { useEffect, useState } from 'react';
import { getCocktailById } from '../../../utils/api-util.js';
import { DrinkCard } from '../DrinkCard/index.js'

export const DrinkCardWrapper = ({ drink: { idDrink: id } }) => {
    const [drinkData, setDrinkData] = useState();

    const loadCocktail = async () => {
        const drink = await getCocktailById(id);
        setDrinkData(drink);
    }

    useEffect(() => {
        loadCocktail();
    }, [id]);

    if (drinkData === undefined) {
        return <div>Loading...</div>;
    }

    return <DrinkCard drink={drinkData} />
}

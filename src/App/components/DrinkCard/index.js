import React, { useMemo } from 'react';
import './style.css';

export const DrinkCard = ({ drink }) => {
    const ingredients = useMemo(() => (
        new Array(15).fill(undefined).map((_, idx) => ({
            ingredientType: drink[`strIngredient${idx + 1}`],
            ingredientAmount:  drink[`strMeasure${idx + 1}`],
        })).filter(filtered => (
            filtered.ingredientAmount !== undefined && filtered.ingredientType
        ))
    ), [drink]);

    const { strDrink, strDrinkThumb, strInstructions } = drink;
    return (
        <div class="drink-tile">
            <h3 class="drink-tile-heading">{strDrink}</h3>
            <img alt="Drink Preview" class="drink-tile-preview" src={strDrinkThumb} />
            <h4 class="drink-tile-subheading">What's Inside?</h4>
            <div>
                {
                    ingredients.map(({ ingredientAmount, ingredientType }) => (
                        <div class="drink-tile-content">
                            {ingredientAmount ? `${ingredientAmount} of ` : null}
                            {ingredientType}
                        </div>
                    ))
                }
            </div>
            <h4 class="drink-tile-subheading">How's it made?</h4>
            <div class="drink-tile-content">{strInstructions}</div>
        </div>
    )
};
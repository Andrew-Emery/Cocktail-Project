import React, { useState, useEffect } from 'react';
import { DrinkCard } from '../DrinkCard/index.js';
import { getDrinksByPrefix } from '../../../utils/api-util.js';
import "./index.css"

const PageContentDisplayer = ({ letter }) => {
    const [cocktails, setCocktails] = useState(undefined);

    const loadCocktails = async () => {
        const drinks = await getDrinksByPrefix(letter);
        setCocktails(drinks);
    }

    useEffect(() => loadCocktails(), [letter]);

    if (cocktails === undefined) {
        return <div>Search not loaded yet!</div>;
    }

    return (
        <div class="tile-container">
            {
                cocktails.map(cocktail => (
                    <DrinkCard drink={cocktail} />
                ))
            }
        </div>
    );
}

const alphabet = new Array(26).fill(undefined).map((_, idx) => ({
    id: String.fromCharCode(idx + 97),
    text: `<${String.fromCharCode(idx + 65)}>`,
}));

export const AToZFilter = () => {
    const [currentLetter, setCurrentLetter] = useState('a');
    return (
        <div>
            <h2 class="atoz-nav-bar">
                {
                    alphabet.map(({ id, text }) => (
                            <div
                                class={id === currentLetter ? "current-letter" : "bg-letter"}
                                onClick={() => setCurrentLetter(id)}
                            >
                                {text}
                            </div>
                        )
                    )
                }
            </h2>
            <PageContentDisplayer letter={currentLetter}/>
        </div>
    );
};

import React, { useState } from 'react';
import { DrinkCardWrapper } from '../DrinkCardWrapper';
import "./index.css"

const PageContentDisplayer = ({ cocktails }) => {
    if (cocktails === undefined) {
        return <div>Search not loaded yet!</div>;
    }
    return (
        <div class="tile-container">
            {
                cocktails.drinks.map((cocktail) => {
                    return <DrinkCardWrapper drink={cocktail} />
                })
            }
        </div>
    );
}
export const SearchFilter = () => {
    const [currentString, setCurrentString] = useState("");
    const [cocktails, setCocktails] = useState();


    const performQuery = (query) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
            .then((response) => response.json())
            .then((response) => setCocktails(response));
            setCurrentString("")
    }

    return (
        <div>
            <h2 class="search-bar">
                <input
                    id="search-input"
                    value={currentString}
                    placeholder="Search for a favourite spirit or ingredient"
                    onKeyPress={evt => {
                        if (evt.key === "Enter") {
                            performQuery(currentString);
                        }
                    }}
                    onChange={evt => setCurrentString(evt.target.value)}
                />
                <input
                    id="search-return"
                    type="button"
                    value="Search"
                    onClick={() => {
                        performQuery(currentString)
                    }}
                />
            </h2>
            <PageContentDisplayer cocktails={cocktails} />
        </div>
    );
};
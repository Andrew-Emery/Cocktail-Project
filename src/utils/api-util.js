
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktail = async () => {
    const request = await fetch(`${BASE_URL}/random.php`);
    const json = await request.json();
    return json.drinks[0];
}

export const getCocktailById = async (id) => {
    const request = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const json = await request.json();
    return json.drinks[0];
}

export const getDrinksByPrefix = async (prefix) => {
    const request = await fetch(`${BASE_URL}/search.php?f=${prefix}`);
    const json = await request.json();
    return json.drinks;
}
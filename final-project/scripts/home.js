import { fetchRecipes } from './data.js';
import { getRandomItems } from './utils.js';
import { displayRecipes } from './recipe.js';

export async function loadHomepageRecipes() {
    const allRecipes = await fetchRecipes();

    const featured = getRandomItems(allRecipes, 3);

    const container = document.querySelector('#recipe-container');

    displayRecipes(featured, container);
}
import { fetchRecipes } from "./data.js"; import { getRandomItems } from "./utils.js"; import { displayRecipes } from "./recipe.js"; async function loadHomepageRecipes() { var e = await fetchRecipes(), e = getRandomItems(e, 3), i = document.querySelector("#recipe-container"); displayRecipes(e, i) } export { loadHomepageRecipes };
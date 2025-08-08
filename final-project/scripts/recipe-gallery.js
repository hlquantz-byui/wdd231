import { fetchRecipes } from "./data.js";
import { displayRecipes } from "./recipe.js";
let allRecipes = [];

function loadRecipesFromLocalStorage() {
    return JSON.parse(localStorage.getItem("recipes")) || [];
}

function getUniqueCuisines(e) {
    e = e.map(e => e.cuisine);
    return [...new Set(e)];
}

function populateCuisineFilter(e) {
    const i = document.getElementById("cuisine");
    i.innerHTML = '<option value="">All Cuisines</option>';
    e.forEach(e => {
        var t = document.createElement("option");
        t.value = e;
        t.textContent = e;
        i.appendChild(t);
    });
}

async function loadAllRecipes() {
    try {
        var e = await fetchRecipes(),
            t = loadRecipesFromLocalStorage();
        allRecipes = [...e, ...t];
        populateCuisineFilter(getUniqueCuisines(allRecipes));
        var container = document.querySelector("#all-recipes-container");
        displayRecipes(allRecipes, container);
        document.getElementById("difficulty").addEventListener("change", filterRecipes);
        document.getElementById("cuisine").addEventListener("change", filterRecipes);
    } catch (error) {
        console.error("Failed to load recipes:", error);
        const container = document.querySelector("#all-recipes-container");
        if (container) {
            container.innerHTML = "<p>Sorry, we couldn't load the recipes at this time.</p>";
        }
    }
}

function filterRecipes() {
    const i = document.getElementById("difficulty").value,
        n = document.getElementById("cuisine").value;
    var e = allRecipes.filter(e => {
        var t = !i || e.difficulty === i,
            e = !n || e.cuisine === n;
        return t && e;
    }),
        t = document.querySelector("#all-recipes-container");
    displayRecipes(e, t);
    let c = document.getElementById("recipes-live-region");
    c ||
        ((c = document.createElement("div")),
            (c.id = "recipes-live-region"),
            (c.className = "sr-only"),
            c.setAttribute("aria-live", "polite"),
            t.parentNode.insertBefore(c, t));
    c.textContent = e.length + " recipes found.";
}

export { loadAllRecipes };
import { createModal } from "./modal.js"; function displayRecipes(i, n) {
    n.innerHTML = "", i.forEach(e => {
        const t = document.createElement("article"); t.classList.add("recipe-card"), t.setAttribute("tabindex", "0"), t.innerHTML = `
            <h3>${e.title}</h3>
            <p><strong>Cuisine:</strong> ${e.cuisine}</p>
            <p><strong>Difficulty:</strong> ${e.difficulty}</p>
            <p><strong>Ingredients:</strong> ${e.ingredients.join(", ")}</p>
        `, t.addEventListener("click", () => {
            var i = `
                <h3>${e.title}</h3>
                <p><strong>Cuisine:</strong> ${e.cuisine}</p>
                <p><strong>Difficulty:</strong> ${e.difficulty}</p>
                <p><strong>Cooking Time:</strong> ${e.cooking_time}</p>
                <h4>Ingredients:</h4>
                <ul>
                    ${e.ingredients.map(i => `<li>${i}</li>`).join("")}
                </ul>
                <h4>Instructions:</h4>
                <ol>
                    ${e.instructions.map(i => `<li>${i}</li>`).join("")}
                </ol>
            `; createModal(i)
        }), t.addEventListener("keypress", i => { "Enter" !== i.key && " " !== i.key || t.click() }), n.appendChild(t)
    })
} export { displayRecipes };
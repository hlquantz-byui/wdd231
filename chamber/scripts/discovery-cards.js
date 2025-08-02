async function fetchPlaces() { try { var e = await fetch("data/places.json"); if (!e.ok) throw new Error("Network response was not ok"); displayPlaces(await e.json()) } catch (e) { console.error("Fetch error:", e), document.getElementById("cardContainer").innerHTML = "<p>Failed to load members. Please try again later.</p>" } } function displayPlaces(e) {
    const r = document.getElementById("cardContainer"); e.forEach((e, a) => {
        const t = document.createElement("div"); t.classList.add("place-card", "card" + (a + 1)), t.innerHTML = `
            <h2>${e.name}</h2>
            <figure>
                <img src="${e.image}" alt="Image of ${e.name}" width="300" height="200" loading="lazy">
            </figure>
            <address>${e.address}</address>
            <p>${e.description}</p>
            <button>Learn More</button>
        `, r.appendChild(t), setTimeout(() => { t.classList.add("show") }, 100 * a)
    })
} fetchPlaces();
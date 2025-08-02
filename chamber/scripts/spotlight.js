async function fetchMembersData() { try { var e = await fetch("data/members.json"); if (!e.ok) throw new Error("HTTP error! status: " + e.status); displaySpotlights(await e.json()) } catch (e) { console.error("Error fetching members data:", e) } } function getRandomMembers(e, t) { return e.filter(e => 1 === e.membership_level || 2 === e.membership_level).sort(() => .5 - Math.random()).slice(0, t) } function displaySpotlights(e) {
    const t = document.querySelector(".company-spotlights"); e = getRandomMembers(e, 3); t.innerHTML = "", e.forEach(e => {
        e = `
            <div class="spotlight">
                <img src="${e.image}" alt="${e.name} Logo" class="member-logo" width="100" height="100" loading="lazy">
                <h3>${e.name}</h3>
                <p>${e.description}</p>
                <p>Phone: ${e.phone}</p>
                <p>Address: ${e.address}</p>
                <p>Website: <a href="${e.website}" target="_blank">${e.website}</a></p>
            </div>
        `; t.innerHTML += e
    })
} fetchMembersData();
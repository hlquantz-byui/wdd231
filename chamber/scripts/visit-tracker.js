document.addEventListener("DOMContentLoaded", () => {
    const e = document.getElementById("visit-message"); var t = Date.now(), s = Number(localStorage.getItem("lastVisit")); let a = ""; a = s ? (s = Math.floor((t - s) / 864e5)) < 1 ? "Back so soon! Awesome!" : 1 === s ? "You last visited 1 day ago." : `You last visited ${s} days ago.` : "Welcome! Let us know if you have any questions.", e && (e.innerHTML = `
            <span>${a}</span>
            <button class="close-btn" aria-label="Close message">&times;</button>
        `, e.classList.remove("hidden"), e.querySelector(".close-btn").addEventListener("click", () => { e.classList.add("hidden") })), localStorage.setItem("lastVisit", t)
});
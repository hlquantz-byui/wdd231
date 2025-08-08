function createModal(e) {
  const o = document.createElement("div"); o.classList.add("modal"), o.innerHTML = `
    <div class="modal-content">
      ${e}
      <button class="modal-close">Close</button>
    </div>
  `, document.body.appendChild(o), o.classList.add("show"), o.querySelector(".modal-close").addEventListener("click", () => { o.remove() })
} export { createModal };
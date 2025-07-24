// Animation for cards
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 200);
    });
});

let lastFocusedElement = null;

function openModal(modalId, linkId) {
    const modal = document.getElementById(modalId);
    lastFocusedElement = document.getElementById(linkId);
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    trapFocus(modal);
}

function closeModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.style.display = "none";
    lastFocusedElement.focus();
    modal.setAttribute("aria-hidden", "true");
}

function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll('a, button, textarea, input, select');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    modal.addEventListener("keydown", function (event) {
        if (event.key === "Tab") {
            if (event.shiftKey) {
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    })
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        const openModal = document.querySelector('.modal[aria-hidden="false"]');
        if (openModal) {
            closeModal(openModal.id);
        }
    }
});
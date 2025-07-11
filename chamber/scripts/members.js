function displayMembers(members) {
    const membersDiv = document.getElementById('members');
    const isGridView = membersDiv.classList.contains('grid');

    membersDiv.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';

        if (isGridView) {
            memberDiv.innerHTML = `
                <img src="${member.image}" alt="${member.name}" onerror="this.onerror=null; this.src='fallback-image.jpg';">
                <div>
                    <h2>${member.name}</h2>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>
            `;
        } else {
            memberDiv.innerHTML = `
                <div>${member.name}</div>
                <div>${member.address}</div>
                <div>${member.phone}</div>
                <div><a href="${member.website}" target="_blank">${member.website}</a></div>
            `;
        }

        membersDiv.appendChild(memberDiv);
    });
}

const membersDiv = document.getElementById('members');
const listBtn = document.getElementById('listViewBtn');
const gridBtn = document.getElementById('gridViewBtn');

listBtn.addEventListener('click', () => {
    membersDiv.classList.remove('grid');
    membersDiv.classList.add('list');
    setActiveView('list');
    displayMembers(currentMembers);
});

gridBtn.addEventListener('click', () => {
    membersDiv.classList.remove('list');
    membersDiv.classList.add('grid');
    setActiveView('grid');
    displayMembers(currentMembers);
});

function setActiveView(view) {
    const listBtn = document.getElementById('listViewBtn');
    const gridBtn = document.getElementById('gridViewBtn');

    if (view === 'list') {
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    } else {
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    }
}

let currentMembers = [];

async function fetchMembers() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error('Network response was not ok');
        currentMembers = await response.json();
        displayMembers(currentMembers);
    } catch (error) {
        console.error('Fetch error:', error);
        membersDiv.innerHTML = '<p>Failed to load members. Please try again later.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => { fetchMembers(); setActiveView('grid') });

// Call the fetchMembers function to load the data after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
});

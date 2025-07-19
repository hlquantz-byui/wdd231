async function fetchMembersData() {
    try {
        const response = await fetch('data/members.json'); // Adjust the path as needed
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const membersData = await response.json();
        displaySpotlights(membersData); // Pass the fetched data to the display function
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

function getRandomMembers(members, count) {
    const goldOrSilverMembers = members.filter(member => 
        member.membership_level === 1 || member.membership_level === 2
    );

    const shuffled = goldOrSilverMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlights(membersData) {
    const spotlightContainer = document.querySelector('.company-spotlights');
    const randomMembers = getRandomMembers(membersData, 3); // Display 3 random members

    spotlightContainer.innerHTML = ''; // Clear existing content

    randomMembers.forEach(member => {
        const memberCard = `
            <div class="spotlight">
                <img src="${member.image}" alt="${member.name} Logo" class="member-logo">
                <h3>${member.name}</h3>
                <p>${member.description}</p>
                <p>Phone: ${member.phone}</p>
                <p>Address: ${member.address}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            </div>
        `;
        spotlightContainer.innerHTML += memberCard;
    });
}

// Call the function to fetch members data when the page loads
fetchMembersData();
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

// Display user information
const userInfo = getQueryParams();
const userInfoDiv = document.getElementById('userInfo');
userInfoDiv.innerHTML = `
            <h1>Thank You for Your Submission!</h1>
            <p>Your information has been successfully submitted. Here are the details:</p>
            <div><strong>First Name:</strong> ${userInfo['first-name']}</div>
            <div><strong>Last Name:</strong> ${userInfo['last-name']}</div>
            <div><strong>Organizational Title:</strong> ${userInfo['organizational-title']}</div>
            <div><strong>Email:</strong> ${userInfo['email']}</div>
            <div><strong>Mobile Phone Number:</strong> ${userInfo['mobile-phone-number']}</div>
            <div><strong>Organization Name:</strong> ${userInfo['organization-name']}</div>
            <div><strong>Membership Level:</strong> ${userInfo['membership']}</div>
            <div><strong>Timestamp:</strong> ${userInfo['timestamp']}</div>
        `;
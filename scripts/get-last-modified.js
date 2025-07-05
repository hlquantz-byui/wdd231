// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
// Set the last modified date in the HTML
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
const mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}

// Creating and appending a new header with id and text
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name
document.body.appendChild(newHeader);
// Write your code here!

const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1'); 
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Alaa is the champion";

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'All of this was created with Javascript';
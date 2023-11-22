const textFieldRef = document.getElementById('textField');
const ghostContainer = document.createElement('div');
const ghostDescr = document.createElement('p');

ghostDescr.style.margin = 0;
ghostDescr.textContent = 'Hi, I am Ghost-div!!!';

ghostContainer.appendChild(ghostDescr);

textFieldRef.addEventListener('mouseover', change);
textFieldRef.addEventListener('mouseout', hide);

const mainContainerRef = document.querySelector('.main-container');
mainContainerRef.style.display = 'flex';
mainContainerRef.style.columnGap = '10px';

function change() {
  textFieldRef.after(ghostContainer);
}
function hide() { 
  ghostContainer.remove();
}
import "../scss/modules/menu.scss";

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = [];

function addItem(e) {
    e.preventDefault();

    const input = addItems.querySelector('[type=text]').value;

    const newItem = {
        input,
        checked: false,
    }
    
    items.push(newItem);

    const parsedPlates = JSON.stringify(items);

    localStorage.setItem('plates', parsedPlates);

    generateList(items, itemsList);

    this.reset();
}

function generateList(plates = [], listElement) {
    listElement.innerHTML = plates.map((plate, i) => {
        return `<li><input type="checkbox" ${plate.checked ? 'checked' : ''} " name="item${i}" data-index="${i}"> ${plate.input}</li>`
    } ).join('');

    listenToChecks(listElement);
}

function listenToChecks(list) {
    const checkboxes = list.querySelectorAll('li input');

    console.log('These are checkboxes: ', checkboxes);

    checkboxes.forEach(checkbox => checkbox.addEventListener('change', toggleCheck))
}

function toggleCheck() {
    const index = this.dataset.index;
    items[index].checked = this.checked;

    const parsedPlates = JSON.stringify(items);

localStorage.setItem('plates', parsedPlates);
}

if(localStorage.getItem('plates')) {
    let loadedItems = JSON.parse(localStorage.getItem('plates'));
    generateList(loadedItems, itemsList);

    items.push(...loadedItems);
}

addItems.addEventListener("submit", addItem);

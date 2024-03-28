// Fetch the items from the JSON file
function loadItems() {
    return fetch('/data/data.json') //
        .then((response) => response.json())
        .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="./img/${item.image}" alt="${item.type}" class="item__thumbnail" />
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

// html > data-*
// js > e.target.dataset
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if (key == null || value == null) return;

    const filtered = items.filter((item) => item[key] == value);
    displayItems(filtered);
}

// Event Delegation (이벤트 위임)
// 버튼이 들어있는 컨테이너 자치를 등록
// 컨테이너에 이벤트 리스너 등록 > 한 곳ㅔ서만 핸들링(효율적)
function setEventListener(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');

    logo.addEventListener('click', () => {
        displayItems(items);
    });
    buttons.addEventListener('click', (event) => {
        onButtonClick(event, items);
    });
}
loadItems() //
    .then((items) => {
        // console.log(items);
        displayItems(items);
        setEventListener(items);
    })
    .catch(console.log);

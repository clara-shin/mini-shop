// Fetch the items from the JSON file
function loadItem() {
    return fetch('/data/data.json') //
        .then((response) => response.json())
        .then((json) => console.log(json.items));
}
loadItem() //
    .then((item) => {
        console.log(item);
    })
    .catch(console.log);

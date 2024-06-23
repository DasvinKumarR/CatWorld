// Declared base url
const baseURL = "https://cataas.com/";
// get div element using classname
let div = document.getElementsByClassName("content")[0];
// promise function to fetch and display the data
async function getData(endPoint) {
    try {
        div.innerText = "Loading..."
        let response = await fetch(baseURL + endPoint);
        if (!response.ok) {
            throw new Error('Failed to fetch cat image');
        }
        let imageUrl = response.url;
        div.innerHTML = `<img src="${imageUrl}" alt="Cat Image">`;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}
// function call to get cat image
function getCat(){
    getData("cat");
}
// function call to get orange tag cat image
function getOrangeCat(){
    getData("cat/orange,cute");
}
// functional to get cat gif
function getCatGif(){
    getData("cat/gif");
}
// function to call hello cat image
function sayHelloCat(){
    getData("cat/cute/says/hello");
}

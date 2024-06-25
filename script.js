// Declared base url
const baseURL = "https://cataas.com/";
let catCount = 50;
let id = [];
// get div element using classname
let root = document.getElementsByClassName("root")[0];
// function to create card.
async function createCard(id, tags, img) {
    try {
        let cardWrapper = document.createElement("div");
        cardWrapper.setAttribute("class", "card-wrapper");
        cardWrapper.innerHTML = `<div class="card">
        <img src="${img}" class="card-img-top gallery" alt="Cat Image Loading...">
        <div class="card-body">
            <h5 class="card-title">Cat Detail</h5>
            <p class="card-text">Cat Id: ${id}</p>
            <p class="card-text">Cat Tag: ${tags.join(', ')}</p>
        </div>
        </div>`;

        root.appendChild(cardWrapper);
    } catch (error) {
        console.log(error);
    }
}
// promise function to fetch and display the data
fetch('https://cataas.com/api/cats')
.then(response=>response.json())
.then(data=>{
    data.forEach(e => {
        createCard(e._id,e.tags,baseURL+"cat/"+e._id);
    });
})
.catch((err)=>console.error(err))
//funciton to display cat images
async function fetchData(endPoint) {
    try {
        root.innerHTML = `<div class="content">
            <img class="singleImage" src="${baseURL+endPoint}" alt="Cat Loading..."/>
        </div>`;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

// function call to get cat image
function getCat(){
    fetchData("cat");
}
// function call to get orange tag cat image
function getOrangeCat(){
    fetchData("cat/orange,cute");
}
// functional to get cat gif
function getCatGif(){
    fetchData("cat/gif");
}
// function to call hello cat image
function sayHelloCat(){
    fetchData("cat/cute/says/hello");
}
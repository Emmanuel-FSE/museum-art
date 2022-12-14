document.addEventListener("DOMContentLoaded", fetchData);

function fetchData(){
    fetch("https://openaccess-api.clevelandart.org/api/artworks/?has_image&limit=20")
    .then(res => res.json())
    .then(data => renderArt(data))
}

function renderArt(arr){
    console.log(arr.data)
    arr.data.forEach(element => {
        let cardDiv = document.createElement("div")
        cardDiv.className = "cardB";
        cardDiv.innerHTML = 
        `
            <div class="image">
            <img src="${element.images.web.url}">
            </div>
            <div class="title">
            <h1>${element.title}</h1>
            </div>
            <div class="des">
            <p>${element.wall_description}</p>
            <button class="btn btn-danger">like</button>
            </div>
        `
    document.querySelector("#displayCard").appendChild(cardDiv)
    });
}
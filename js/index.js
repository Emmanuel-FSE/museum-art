document.addEventListener("DOMContentLoaded", fetchData);

function fetchData(e){
    e.preventDefault();
    fetch("https://openaccess-api.clevelandart.org/api/artworks/?has_image&limit=12")
    .then(res => res.json())
    .then(data => renderArt(data))
}

function renderArt(arr){
    arr.data.forEach(element => {
        let cardDiv = document.createElement("div")
        cardDiv.className = "cardB";
        cardDiv.innerHTML = 
        `
            <div class="image">
                <img src="${element.images.web.url}">
            </div>
                <div style="height: 200px" class="overflow-scroll">
                    <div class="title">
                    <h1>${element.title}</h1>
                    </div>
                    <div class="des">
                    <p>${element.wall_description}</p>
                    </div>
                </div>
                <div class="mt-3 mb-3 d-flex justify-content-evenly">
                    <button name="${element.id}" onclick="like(this)" class="btn btn-danger">Like!</button>
                    <p id="${element.id}" class="btn btn-success visually-hidden">&#x2713;</p>
                </div>
            </div>
        `
    document.querySelector("#displayCard").appendChild(cardDiv)
    });
}

function like(target){
   let pTag = document.getElementById(`${target.name}`)
   if(pTag.classList.contains("visually-hidden")){
   pTag.classList.remove("visually-hidden")
   target.textContent = "Liked";
   }
   else{
    pTag.classList.add("visually-hidden")
    target.textContent = "Like!"
   }
}


let divNames = document.querySelector("#names")
let form = document.getElementById("search")
form.addEventListener("submit", function(e){
    e.preventDefault();
    fetch(`https://openaccess-api.clevelandart.org/api/creators/?name=${e.target.search.value}&limit=10`)
    .then(res => res.json())
    .then(data => renderSearch(data))
    e.target.search.value = "";
    divNames.innerHTML = "";
})

function renderSearch(arr){
    arr.data.forEach(element => {
        let ulNames = document.createElement("ul")
        ulNames.innerHTML = `
        <li class="text-danger">
            <ul>
              <li>${element.name}</li>
              <li>${element.nationality}</li>
            <ul>
        </li>
        `
        divNames.appendChild(ulNames);
    })
}
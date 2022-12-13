document.addEventListener("DOMContentLoaded", fetchData);

function fetchData(){
    fetch("https://api.harvardartmuseums.org/Image?apikey=99681100-3da5-46dc-a187-80d1222a8d06")
    .then(res => res.json())
    .then(data => renderArt(data))
}

function renderArt(data){
    console.log(data.records)
    data.records.forEach(element => {
        let cardDiv = document.createElement("div")
        cardDiv.innerHTML = `<div class="card m-3" id="card" style="max-width: 540px;">
        <div class="row no-gutters">
        <div class="col-md-4">
            <img src="${element.baseimageurl}" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
    </div>`
    document.querySelector("#displayCard").appendChild(cardDiv)
    });
}
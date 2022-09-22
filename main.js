const  rmCreator = document.querySelector(".RM-container");
const nextP = document.querySelector(".next");
const prevP = document.querySelector(".prev");

const limit = 10;
let offset = 1;

function rmPagination(pg){
    fetch(`https://rickandmortyapi.com/api/character/${pg}`)
    .then(res=> res.json())
      .then(data => 
        rmCardCreator(data)
    )
}

function caller(){
    for (let i = offset; i < offset+limit; i++) {
        rmPagination(i); 
    }
}

if (offset ===1){
    caller()
}

nextP.addEventListener('click', function (){
    offset = offset + limit;
    caller();
    console.log(offset);
})

console.log(offset);

prevP.addEventListener('click', function(){
    offset = offset - limit;
    if(offset<1){
        offset=1
        return
    }
    caller()
    console.log(offset);
})

console.log(offset)



function rmCardCreator(apiData){
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const image = document.createElement('img');
    image.src = `${apiData.image}`;

    const id = document.createElement('p');
    id.textContent = `${apiData.id.toString()}`

    const name = document.createElement('p');
    name.textContent = `${apiData.name}`;

    const status = document.createElement('p');
    status.textContent = `${apiData.status}`;

    imgContainer.appendChild(image);
    imgContainer.appendChild(id);
    imgContainer.appendChild(name);
    imgContainer.appendChild(status);
    rmCreator.appendChild(imgContainer);
}

[1, 2, 4, 5] 1-4
[1, 2, 4, 5] 2-3
[1, 2, 4, 5] 3-2
[1, 2, 4, 5] 4-1
const  rmCreator = document.querySelector(".RM-container");
const nextP = document.querySelector(".next");
const prevP = document.querySelector(".prev");

const limit = 10;
let offset = 1;

function rmPagination(pg){
    fetch(`https://rickandmortyapi.com/api/character/${pg}`)
    .then(res=> res.json())
      .then(data => 
        { rmCardCreator(data) 
            console.log(data) })
}

function caller(){
    for (let i = offset; i < offset+limit; i++) {
        rmPagination(i); 
    }
}

if (offset ===1){
    caller()
}

function remover(){
    for (let i = offset; i< offset+limit; i++){
        let idN = i.toString();
        document.getElementById(idN).remove();
    }
}

nextP.addEventListener('click', function (){
    remover();
    offset = offset + limit;
    caller();
    console.log(offset);
})

console.log(offset);

function disableB(offset){
    if (offset < 1){
        document.getElementById('prev').disabled = false;
    }
}

disableB(offset)


prevP.addEventListener('click', function(){
    
    remover();
    offset = offset - limit;
    caller()
    console.log(offset);
    
})

console.log(offset)





function rmCardCreator(apiData){
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.id = `${apiData.id}`;

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

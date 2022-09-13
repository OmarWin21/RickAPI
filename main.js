const  rmCreator = document.querySelector(".RM-container");

function fRickMorty(data) {
        for (let i = 0; i < data.length; i++){
            let apiData ={
                image: data[i].image,
                id: data[i].id,
                name: data[i].name,
                gender: data[i].gender,
                status: data[i].status
            }
            rmCardCreator(apiData) 
    }
}
function rmPagination(pg){
    fetch(`https://rickandmortyapi.com/api/character?page=${pg}`)
    .then(res=> res.json())
    .then(data => fRickMorty(data.results))
}

for (let i = 0; i < 42; i++) {
    rmPagination(i);
   
}


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
fRickMorty();

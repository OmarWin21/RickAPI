const  rmCreator = document.querySelector(".RM-container");

function fRickMorty() {
    fetch('https://rickandmortyapi.com/api/character')
    .then((resp)=> resp.json())
    .then((data)=> {
        for (let i = 0; i < data.results.length; i++){
            let apiData ={
                image: data.results[i].image,
                id: data.results[i].id,
                name: data.results[i].name,
                gender: data.results[i].gender,
                status: data.results[i].status
            }
            rmCardCreator(apiData); 
        }
    });
}
function rmPagination(pg){
    fetch(`https://rickandmortyapi.com/api/character?page=${pg}`)
    .then((res)=> res.json())
    .then((pages) => console.log(pages));
}

rmPagination(5);


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

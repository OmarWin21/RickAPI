const  rmCreator = document.querySelector(".RM-container");

function fRickMorty() {
    fetch('https://rickandmortyapi.com/api/character')
    .then((resp)=> resp.json())
    .then((data)=> {
        for (let i = 0; i < data.results.length; i++){
            console.log({
                image: data.results[i].image,
                id: data.results[i].id,
                name: data.results[i].name,
                gender: data.results[i].gender,
                status: data.results[i].status
            })
        }
    });
}
fRickMorty();

// function rmCardCreator (character){
//     const imgContainer = document.createElement('div');
//     imgContainer.classList.add('img-container');

//     const image = document.createElement('img');
//     image.src = data.results.image;

//     imgContainer.
// }
function fRickMorty(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}/`)
    .then((resp)=> resp.json())
    .then((data)=> console.log(data));
}

function fCharacters(idNumber){
    for (var i = 1; i <= idNumber; i++){
        fRickMorty(i);
    }
}

fCharacters(20);
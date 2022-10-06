const  rmCreator = document.querySelector(".RM-container");
const nextP = document.querySelector(".next");
const prevP = document.querySelector(".prev");
const fCreator = document.querySelector(".body");

// const limit = 10;
// let offset = 1;

// function rmPagination(pg){
//     fetch(`https://rickandmortyapi.com/api/character/${pg}`)
//     .then(res=> res.json())
//       .then(data => 
//         { rmCardCreator(data) 
//             console.log(data) })
// }

// function caller(){
//     for (let i = offset; i < offset+limit; i++) {
//         rmPagination(i);
//     }
// }

// if (offset ===1){
//     caller()
// }


// function remover(){
//     for (let i = offset; i< offset+limit; i++){
//         let idN = i.toString();
//         document.getElementById(idN).remove();
//     }
// }

// nextP.addEventListener('click', function (){ 
//     remover();
//     offset = offset + limit;

//     if (offset > 1){
//         document.getElementById('prev').disabled = false;
//     }

//     caller();
//     console.log(offset);
// })

// console.log(offset);



// prevP.addEventListener('click', function(){
//     remover();
//     offset = offset - limit;
//     if (offset < 10){
//         document.getElementById('prev').disabled = true;
//     }
//     caller()
//     console.log(offset);
// })

// console.log(offset)

let currentPg = 1;
let array=[]
var offset = (20*currentPg) - 19 
var limit = 20*currentPg

console.log(offset + ' init')
console.log(limit + ' init')

function rmPg (pg){
    fetch(`https://rickandmortyapi.com/api/character/?page=${pg}`)
    .then(resp => resp.json())
    .then(data => {
        for (let i = 0; i< data.results.length; i++){
            let apiData = {
                id: data.results[i].id,
                name: data.results[i].name,
                status: data.results[i].status,
                image: data.results[i].image,
                gender: data.results[i].gender
            }
            array.push(apiData)
            rmCardCreator(apiData);
        }
    })
}
console.log(array);


rmPg(1);


function remover(){
    for (let i = offset; i<= limit; i++){
        let idN = i.toString();
        document.getElementById(idN).remove();
    }
}

nextP.addEventListener('click', function(){
    remover();
    currentPg = currentPg + 1;
    offset = (20*currentPg) - 19;
    limit = limit + 20;

        if (offset > 1){
        document.getElementById('prev1').disabled = false;
    }

    rmPg(currentPg);
    console.log(offset + ' next')
    console.log(limit + ' next')

})

prevP.addEventListener('click', function(){
    remover();
    currentPg = currentPg - 1;
    console.log(currentPg)
    offset = (20*currentPg) - 19;
    limit = limit - 20;

    if (offset < 10){
        document.getElementById('prev1').disabled = true;
    }

    rmPg(currentPg);
    console.log(offset + ' prev')
    console.log(limit + ' prev')
})



function rmCardCreator(apiData){
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container' , 'product-card');
    imgContainer.id = `${apiData.id}`;

    const image = document.createElement('img');
    image.src = `${apiData.image}`;

    const inC = document.createElement('div');
    inC.classList.add('product-info');

    const inC2 = document.createElement('div');

    const id = document.createElement('p');
    id.textContent = `${apiData.id.toString()}`

    const name = document.createElement('p');
    name.textContent = `${apiData.name}`;

    const status =  document.createElement('p');
    status.textContent = `${"Status: "+apiData.status}`;

    
    imgContainer.appendChild(image);
    imgContainer.appendChild(inC)
    inC.appendChild(inC2);
    inC2.appendChild(name);
    inC2.appendChild(status);
    rmCreator.appendChild(imgContainer);
}

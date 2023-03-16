// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

let url= 'https://dog.ceo/api/breeds/image/random';
let btn = document.getElementById('btn btn-primary');
let image = document.getElementById('dogsAPI');
let dogId = document.getElementById('dogID');
let dogAge = document.getElementById('dogAge');
let dogRegistry = document.getElementById('dogRegistry');

btn.addEventListener('click',() =>{
    fetch(url)
        .then(response => response.json())
        .then(data=> {
        console.log(data)
        image.src = data.message
        dogId.innerHTML = '${data.file}'
    })
        .catch(error=>console.log(error))
    })

function displaydog(dog){
    const dogId = document.getElementById( 'dogId' );
    const dogAge = document.getElementById( 'dogAge' );
    const dogRegistry = document.getElementById( 'dogRegistry' );
    const image = document.getElementById( 'dogsAPI' );

    dogId.innerText = '${dog.id}';
    dogAge.innerText = '${dog.age}';
    dogRegistry.innerText ='${dog.registry}';
    image.setAttribute('src','${dog.picture.large}');

}
getDog();
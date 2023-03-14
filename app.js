// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

let url= 'https://dog.ceo/api/breeds/image/random';
let btn = document.getElementById('btn btn-primary');
btn.addEventListener('click',() =>{
fetch(url)
    .then(response => response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
})
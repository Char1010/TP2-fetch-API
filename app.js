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

/**
const cat_result = document.getElementById( 'dogId' );
const dog_result = document.getElementById( 'dogAge' );
const fox_result = document.getElementById( 'dogRegistry' );


cat_btn.addEventListener( 'click', getRandomCat );
dog_btn.addEventListener( 'click', getRandomDog );
fox_btn.addEventListener( 'click', getRandomFox );

function getRandomCat() {
	fetch( 'https://aws.random.cat/meow' )
		.then( res => res.json() )
		.then( data => {
			cat_result.innerHTML = `<img src="${data.file}" />`;
		} );
}
**/

/** 
let url= 'https://dog.ceo/api/breeds/image/random';

fetch(url).then((data) =>{
    return data.json ();
}).then((completedata)=>{
   // console.log(completedata);
   let data1='';
   completedata.map((values)=>{
data1
   })

}).catch((error)=>{
    console.log(err);
})
**/


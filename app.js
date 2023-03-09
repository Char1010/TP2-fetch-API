// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random



fetch('https://dog.ceo/api/breeds/image/random')

.then ((response)=> {
    return response.text()
})
.then ((text)=>{
    console.log(text)
})


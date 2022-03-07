const img = document.querySelector('.container img');
const button = document.querySelector('.container button')

button.addEventListener('click', getDogName) 

function getDogName(){
    fetch('https://dog.ceo/api/breeds/image/random',{
        headers: {
            'Accept': 'application/json'
        }
    }).then(dogData => dogData.json())
    .then(data => img.src = data.message)

}
getDogName(); 

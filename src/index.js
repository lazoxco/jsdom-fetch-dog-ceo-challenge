console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  loadImages()
  loadBreeds()
})

function loadImages(){
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
      data.message.forEach(image => addImage(image))
    })
}

function addImage(imgSrc) {
  const container = document.getElementById('dog-image-container')
  const newImage = document.createElement('img')
  newImage.src = imgSrc
  container.appendChild(newImage)
}

function loadBreeds(){
  const breedsUrl = 'https://dog.ceo/api/breeds/list/all'

  return fetch(breedsUrl)
    .then(resp => resp.json())
    .then(data => {
      const breeds = Object.keys(data.message)
      addBreeds(breeds)
    })
}

function addBreeds(breeds){
  const ul = document.getElementById('dog-breeds')

  breeds.forEach(breed => {
    const li = document.createElement('li')
    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener("click", function(e) {
      e.target.style.color = "blue"
    })
  })
}
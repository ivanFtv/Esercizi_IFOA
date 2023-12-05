let petNameField = document.getElementById('petName-field')
let ownerNameField = document.getElementById('ownerName-field')
let speciesField = document.getElementById('species-field')
let breedField = document.getElementById('breed-field')

let petList = document.getElementById('petList')
let addButton = document.getElementById('add')

let pets = []

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const renderList = function () {
  petList.innerHTML = '' // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement('li')
    newLi.innerText =
      'Nome: ' + pet.petName + ', proprietario: ' + pet.ownerName
    petList.appendChild(newLi)
  })
}

addButton.onclick = function () {
  let newPet = new Pet(
    petNameField.value,
    ownerNameField.value,
    speciesField.value,
    breedField.value
  )
  pets.push(newPet)
  renderList()
  petNameField.value = '' // <-- svuota l'input field alla fine
  ownerNameField.value = '' // <-- svuota l'input field alla fine
  speciesField.value = '' // <-- svuota l'input field alla fine
  breedField.value = '' // <-- svuota l'input field alla fine
}

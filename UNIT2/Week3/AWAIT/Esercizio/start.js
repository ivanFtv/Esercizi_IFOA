const PEXELS_URL = 'https://api.pexels.com/v1/search?query='
const API_KEY = 'TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5'

const fillImageInModal = function (context) {
  let imgIntoModal = document.querySelector('.modal img')
  imgIntoModal.src =
    context.parentElement.parentElement.parentElement.parentElement.querySelector(
      'img'
    ).src
}

const hideColumn = function (context) {
  let rightColToDelete = context.closest('.col-md-4')
  rightColToDelete.remove()
}

const renderCards = function (photos) {
  let row = document.querySelector('.album .container .row')
  row.innerHTML = ''
  photos.forEach((photo) => {
    let colTemplate = `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <a href="./pexels-details.html?photoId=${photo.id}">
            <img src=${photo.src.small}} style="width: 100%" />
        </a>
            <div class="card-body">
            <a href="./pexels-details.html?photoId=${photo.id}">
                <h5 class="card-title">Lorem Ipsum</h5>
            </a>
                <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </p>
                <div
                class="d-flex justify-content-between align-items-center"
                >
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="fillImageInModal(this)"
                    >
                        View
                    </button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onclick="hideColumn(this)"
                    >
                    Hide
                    </button>
                </div>
                <small class="text-muted">${photo.id}</small>
                </div>
            </div>
        </div>
    </div>
    `
    row.innerHTML += colTemplate
  })
}

const getImages = function (query) {
  fetch(PEXELS_URL + query, {
    headers: {
      authorization: API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Error getting the images')
      }
    })
    .then((data) => {
      console.log(data)
      renderCards(data.photos)
    })
    .catch((err) => {
      console.log(err)
    })
}

window.onload = function () {
  let primaryButton = document.querySelector('.btn-primary')
  primaryButton.addEventListener('click', () => {
    getImages('mountains')
  })

  let secondaryButton = document.querySelector('.btn-secondary')
  secondaryButton.addEventListener('click', () => {
    getImages('sunsets')
  })

  let customInputField = document.querySelector('.input-group .form-control')
  let customSearchButton = document.querySelector(
    '.input-group .btn-outline-secondary'
  )
  customSearchButton.addEventListener('click', () => {
    getImages(customInputField.value)
  })
}

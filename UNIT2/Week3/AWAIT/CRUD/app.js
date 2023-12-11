const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDIxNTU1MTUsImV4cCI6MTcwMzM2NTExNX0.twA9CA1Sr7fFQXqOabyqnlCpbEisUGZ7FrD6uJi_XoY";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

let products = []


const getRecords = () => {
    fetch(url, {
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        products = data
        createTable(data);
    })
}

const sendData = (action, id) => {
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value,
    }

    const finalUrl = action === 'edit' ? url + id : url

    fetch(finalUrl, {
        method: action === 'edit' ? "PUT" : "POST",
        headers: headers,
        body: JSON.stringify(newRecord)
    })
    .then((response) => response.json())
    .then(data => {
        if (action === 'edit') {
            products.splice(products.findIndex(element => element._id === id), 1, data)
            createTable(products)
        } else {
            products.push(data)
            createTable(products)
        }
        setAlert(action, 200)
    })
    .catch(() => {
        setAlert(action, 400)
})
}

async function getRecord(id) {
    const finalUrl = url + id
    const response = await fetch(finalUrl, {
        headers: headers
    })
    return response.json()   
}

const deleteRecord = (id) => {
    if (confirm('Confermi la tua scelta')) {
        const finalUrl = url + id
        fetch(finalUrl, {
            method: "DELETE",
            headers: headers
        })
        .then(() => {
            products.splice(products.findIndex(element => element._id === id), 1)
            createTable(products)
            setAlert('delete', 200)
        })
        .catch(() => {
            setAlert('delete', 400)
        })
    }
}

function createTable(data) {
    const table = document.querySelector('tbody')
    table.innerHTML = ''

    data.forEach(element => {
        let newRow = `
            <tr>
                <th>${element._id}</th>
                <td>${element.name}</td>
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td>${element.imageUrl.substr(0,40)}</td>
                <td class="justify-content-end">
                    <button type="button" class="btn btn-sm btn-outline-primary mx-1" data-bs-toggle="modal" data-bs-target="#productDetails" onclick="handleModalData('${element._id}','show')">Dettagli</button>
                    <button type="button" class="btn btn-sm btn-outline-warning mx-1" data-bs-toggle="modal" data-bs-target="#productDetails" onclick="handleModalData('${element._id}','edit')">Modifica</button>
                    <button type="button" class="btn btn-sm btn-outline-danger mx-1" onclick="deleteRecord('${element._id}')">Elimina</button>
                </td>
            </tr>
        `
        table.innerHTML += newRow;
    });
}

async function handleModalData(id, action) {
    action === 'show'
        ? document.getElementById('buttonSave').style.display = 'none'
        : document.getElementById('buttonSave').style.display = 'block'
        
    if (id !== null) {
        const data = await getRecord(id)
        document.getElementById('productDetailsTitle').innerText = "Dettagli prodotto " + data.name
        document.getElementById('inputName').value = data.name
        document.getElementById('inputPrice').value = data.price
        document.getElementById('inputDescription').value = data.description
        document.getElementById('inputBrand').value = data.brand
        document.getElementById('inputImageUrl').value = data.imageUrl
        document.getElementById('productPhoto').src = data.imageUrl
        document.getElementById('productPhoto').alt = "Immagine prodotto " + data.name
        document.getElementById('buttonSave').setAttribute('onclick', `sendData('${action}', '${id}')`)
    } else {
        document.getElementById('productDetailsTitle').innerText = "Crea nuovo prodotto"
        document.getElementById('inputName').value = ''
        document.getElementById('inputPrice').value = ''
        document.getElementById('inputDescription').value = ''
        document.getElementById('inputBrand').value = ''
        document.getElementById('inputImageUrl').value = ''
        document.getElementById('productPhoto').src = ''
        document.getElementById('productPhoto').alt = ''
        document.getElementById('buttonSave').setAttribute('onclick', `sendData('${action}', null)`)
    }
}

function setAlert(action, responseType) {
    console.log(action);
    const alert = document.getElementById('alert')
    let text = ''
    let className = ''

    if (action === 'create' && responseType === 200) {
        text = 'Prodotto creato con successo'
        className = 'alert-success'
    }
    else if (action === 'edit' && responseType === 200) {
        text = 'Prodotto modificato con successo'
        className = 'alert-success'
    }
    else if (action === 'delete' && responseType === 200) {
        text = 'Prodotto eliminato con successo'
        className = 'alert-success'
    }
    else {
        text = 'Ops, qualcosa è andato storto'
        className = 'alert-danger'
    }

    alert.innerText = text
    alert.classList.remove('alert-success', 'alert-danger')
    alert.classList.add(className)
    alert.style.display = 'block'
    hideAlert()
}

function hideAlert() {
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none'
    }, 5000)
}



window.onload = () => {
    document.getElementById('alert').style.display = 'none'
    getRecords();
    
}


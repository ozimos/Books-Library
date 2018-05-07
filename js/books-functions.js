function getBooks(successCallback, errCallback){
    fetch('http://fakerestapi.azurewebsites.net/api/books')
    .then((resp)=> resp.json())
    .then((data) => successCallback(data))
    .catch((err)=> errCallback(err));
}

function deleteBook(id, successCallback,errCallback){
    fetch(`http://fakerestapi.azurewebsites.net/api/Books/177`, {
        method: 'DELETE',
    })
    .then((resp)=> resp.text())
    .then((data)=> successCallback(data));
}

funciton

getBooks((data)=> console.dir(data), (err)=> console.log(err));
deleteBook(100, (data)=> console.dir(data), (err)=> console.dir(err));
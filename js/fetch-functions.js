function getBooks(successCallback, errCallback){
    fetch('http://fakerestapi.azurewebsites.net/api/books')
    .then((resp)=> {
        if(resp.ok) return resp.json(); 
        throw resp.statusText;
    })
    .then((data) => successCallback(data))
    .catch((err)=> errCallback(err));
}

function deleteBook(id, successCallback,errCallback){
    fetch(`http://fakerestapi.azurewebsites.net/api/Books/177`, {
        method: 'DELETE',
    })
    .then((resp)=> {
        if(resp.status) resp.text();
        throw resp.statusText;
    })
    .then((data)=> successCallback(data));
}


function deleteCoverPhoto(id, successCallback,errCallback){
    fetch(`http://fakerestapi.azurewebsites.net/api/Books/${id}`, {
        method: 'DELETE',
    })
    .then((resp)=>{
        if(resp.ok ) return resp.json(); 
        throw err;
    })
    .then((data)=> successCallback(data))
    .catch((err)=> errCallback(err));
}



getBooks((data)=> console.dir(data), (err)=> console.log(err));
deleteBook(100, (data)=> console.dir(data), (err)=> console.dir(err));

deleteBook(100, (data)=> console.dir(data), (err)=> console.dir(err));

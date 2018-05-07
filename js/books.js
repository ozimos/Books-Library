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
        if(resp.ok) return resp.text();
        throw resp.statusText;
    })
    .then((data)=> successCallback(data));
}



function postBook() {
    const url = 'http://fakerestapi.azurewebsites.net/api/Books';
    let data = {
        "ID": 2,
        "Title": "Book 199",
        "Description": "My Book description is short, Not so much in the book afterall",
        "PageCount": 10,
        "Excerpt": "My Book description is short",
        "PublishDate": "2017-10-20T12:07:26.211333+00:00"
    }

    let fetchData = {
        method: 'POST',
        body: data
    }

    fetch(url, fetchData) // Call the fetch function passing the url of the API as a parameter
        .then((resp) => {
            console.log(resp);
        })
        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log(JSON.stringify(error));
        });
}

postBook();
getBooks((data)=> console.dir(data), (err)=> console.log(err));
deleteBook(100, (data)=> console.dir(data), (err)=> console.dir(err));
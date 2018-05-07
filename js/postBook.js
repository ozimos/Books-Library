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
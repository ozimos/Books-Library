
function postCoverPhoto() {
    const url = 'http://fakerestapi.azurewebsites.net/api/CoverPhotos';
    let data = {
        "ID": 2,
        "IDBook": 2,
        "Url": "https://placeholdit.imgix.net/~text?txtsize=33&txt=Book 2&w=250&h=350"
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

postCoverPhoto();
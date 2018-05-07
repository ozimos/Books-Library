

function deleteCoverPhoto(id, successCallback,errCallback){
    fetch(`http://fakerestapi.azurewebsites.net/api/CoverPhotos/${id}`, {
        method: 'DELETE',
    })
    .then((resp)=>{
        if(resp.ok ) return resp.text(); 
        throw err;
    })
    .then((data)=> successCallback(data))
    .catch((err)=> errCallback(err));
}

function getCoverPhoto(id, successCallback,errCallback){
    fetch(`http://fakerestapi.azurewebsites.net/api/CoverPhotos/${id}`)
    .then((resp)=> {
        if(resp.ok) return resp.json(); 
        throw resp.statusText;
    })
    .then((data) => successCallback(data))
    .catch((err)=> errCallback(err));
}



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
getCoverPhoto(3, (data)=> console.dir(data), (err)=> console.log(err));
deleteCoverPhoto(100, (data)=> console.dir(data), (err)=> console.dir(err));

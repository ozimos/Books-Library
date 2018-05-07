

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



getCoverPhoto(3, (data)=> console.dir(data), (err)=> console.log(err));
deleteCoverPhoto(100, (data)=> console.dir(data), (err)=> console.dir(err));

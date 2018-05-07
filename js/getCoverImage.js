const url = 'http://fakerestapi.azurewebsites.net/api/CoverPhotos';

fetch(url)
  .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
     .catch ((error) => {
    return res.json(error);
  });
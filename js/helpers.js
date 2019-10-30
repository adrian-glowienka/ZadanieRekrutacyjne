const requestData = (url, handler) =>
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Response is not OK");
    })
    .then(handler)
    .catch(error => console.log(error.message));

// const details = document.querySelector("#details__show");
const list = document.querySelector("#shows");





const requestData = (url, handler) =>
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Response is not OK");
    })
    .then(handler)
    .catch(error => console.log(error.message))




    const showDetails = details => {
      name.innerHTML = `Name: ${details.name}`;
    };


    const createList = data => {
      data.map(show => {
        const listItem = document.createElement("li");
          listItem.innerText = show.name;
          listItem.addEventListener("click", function(event) {
          const urlShow = show.url
          requestData(urlShow, showDetails);
          });

          return listItem;
        }).slice(0,12)
        .forEach(item => list.appendChild(item));
    };

    requestData("https://api.tvmaze.com/shows", createList);
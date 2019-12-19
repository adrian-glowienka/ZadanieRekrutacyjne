// const details = document.querySelector("#details__show");
const list = document.querySelector("#shows");
const API_URL = 'https://api.tvmaze.com';

const name = document.querySelector("#name");
const score = document.querySelector("#score");
const relaseDate = document.querySelector("#relase-date");
const runtime = document.querySelector("#runtime");
const description = document.querySelector("#description");

const requestData = (url, handler) => {
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then((data) => handler(data))
    .catch(error => console.log(error.message))
}

const showDetails = details => {
  console.log(details);

  name.innerHTML = `Name: ${details.name}`;
  score.innerHTML = `Score: ${details.rating.average}`;
  relaseDate.innerHTML = `Relase date: ${details.premiered}`;
  runtime.innerHTML = `Runtime: ${details.runtime}`;
  description.innerHTML = `Description: ${details.summary}`;
};


const createList = data => {

  data.map(show => {
      const listItem = document.createElement("li");
      listItem.innerText = show.name;
      listItem.addEventListener("click", function () {
        requestData(`${API_URL}/shows/${show.id}`, showDetails);
      });
      return listItem;
    }).slice(0, 12)
    .forEach(item => list.appendChild(item));
};

requestData(`${API_URL}/shows`, createList);
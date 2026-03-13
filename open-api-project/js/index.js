document.addEventListener("DOMContentLoaded", function () {
  const characterButton = document.querySelector("#show-characters");
  const planetButton = document.querySelector("#show-planets");
  const loading = document.querySelector("#loading");
  const list = document.querySelector("#character-list");
  const sectionTitle = document.querySelector("#section-title");

  function fetchData(url, type) {
    loading.style.display = "block";
    loading.innerText = "Loading " + type + "...";
    list.innerHTML = "";

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const results = data.results;
        let loadedItems = 0;

        results.forEach(function (item) {
          fetch(item.url)
            .then(function (response) {
              return response.json();
            })
            .then(function (detailData) {
              const properties = detailData.result.properties;

              const listItem = document.createElement("li");

              if (type === "characters") {
                listItem.innerText =
                  properties.name +
                  " | Height: " + properties.height +
                  " | Gender: " + properties.gender;
              }

              if (type === "planets") {
                listItem.innerText =
                  properties.name +
                  " | Climate: " + properties.climate +
                  " | Population: " + properties.population;
              }

              list.appendChild(listItem);

              loadedItems++;

              if (loadedItems === results.length) {
                loading.style.display = "none";
              }
            });
        });
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  characterButton.addEventListener("click", function () {
    sectionTitle.innerText = "Character List";
    fetchData("https://www.swapi.tech/api/people", "characters");
  });

  planetButton.addEventListener("click", function () {
    sectionTitle.innerText = "Planet List";
    fetchData("https://www.swapi.tech/api/planets", "planets");
  });
});
fetch("https://www.swapi.tech/api/people")
  .then(response => {
    return response.json();
  })
  .then(data => {
    const characters = data.results;

    const loading = document.querySelector("#loading");
    loading.style.display = "none";
  
    const characterList = document.querySelector("#character-list");
  
    for (let i = 0; i < characters.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerText = `${characters[i].name} (ID: ${characters[i].uid})`;
      characterList.appendChild(listItem);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
document.addEventListener("DOMContentLoaded", function() {
  getCamels();

  function getCamels() {
      fetch("http://localhost:3000/Camels")
          .then(res => res.json())
          .then(camels => {
              camels.forEach(addCamel);
          });
  }

  function addCamel(camel) {
      let row = document.getElementById("card");
      let div = document.createElement("div");
      div.classList.add("col-3");

      div.innerHTML = `
          <div class="card">
              <img src="${camel.image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h4>${camel.breed}</h4><br>
                  <p>Weight: ${camel.weight}</p>
                  <p>Price: ${camel.price}</p>
                  <div class="collapse" id="collapse${camel.id}">
                      <div class="card card-body">
                          ${camel.description}
                      </div>
                  </div>
                  <button class="btn btn-outline-danger buy-btn" data-id="${camel.id}" data-breed="${camel.breed}" data-weight="${camel.weight}" data-price="${camel.price}" data-description="${camel.description}">Buy</button>
              </div>
          </div>`;
      row.appendChild(div);
  }

  const form = document.getElementById("form");
  const animalList = document.getElementById("animalList");

  document.addEventListener("click", function(event) {
      if (event.target.classList.contains("buy-btn")) {
          const breed = event.target.getAttribute("data-breed");
          const weight = event.target.getAttribute("data-weight");
          const price = event.target.getAttribute("data-price");
          const description = event.target.getAttribute("data-description");
          const id = event.target.getAttribute("data-id");
          addAnimalToList(breed, weight, price, description, id);
          form.style.display = "block";
      }
  });

  function addAnimalToList(breed, weight, price, description, id) {
      const li = document.createElement("li");
      li.innerHTML = `
          <strong>Breed:</strong> ${breed}<br>
          <strong>Weight:</strong> ${weight}<br>
          <strong>Price:</strong> ${price}<br>
          <strong>Description:</strong> ${description}`;
      li.className = 'list-group-item';
      li.dataset.id = id;

      const existing = Array.from(animalList.children).find(item => item.dataset.id === id);
      if (!existing) {
          animalList.appendChild(li);
      }
  }

  const buyForm = document.getElementById("buyForm");
  buyForm.addEventListener("submit", function(event) {
      event.preventDefault();
      if (animalList.children.length === 0) {
          alert("Please select at least one animal.");
          return;
      }
     
      alert("Form submitted with animals: " + Array.from(animalList.children).map(li => li.textContent).join(", "));
  });
});

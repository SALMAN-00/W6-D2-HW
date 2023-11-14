function api() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        let itemContainer = document.getElementById("container");
  
        data.forEach(item => {
          let itemContainerdiv = document.createElement("div");
          itemContainerdiv.classList.add("itemContainerdiv");
  
          let itemImage = document.createElement("img");
          itemImage.src = item.image;
          itemImage.classList.add("itemImage");
  
          let itemName = document.createElement("h3");
          itemName.textContent = item.title;
  
          let itemPrice = document.createElement("p");
          itemPrice.textContent = '$' + item.price;
  
          itemContainerdiv.appendChild(itemImage);
          itemContainerdiv.appendChild(itemName);
          itemContainerdiv.appendChild(itemPrice);
  
          itemContainer.appendChild(itemContainerdiv);
        });
      })
      .catch(error => console.error("Error", error));
  }
  
  api();
  
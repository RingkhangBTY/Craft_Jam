const artisans = [
    {
      name: "Ringkhang",
      story: "I create handmade pottery using traditional techniques.",
      location: "North-est kokrajhar, Assam, India",
      products: [
        { name: "Sakalala", price: 29, image: "https://imgs.search.brave.com/m5ipN6sW-MgqHP7Md8nfwdsPTNMvr57LwDmp2kMX6HI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1tYWRlLWEtbmV3/LWJhdWJsZS1mb3It/bXktd2VlLXNob3At/djAtcW0xcDg1dmVm/YnpkMS5qcGc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9NTg2MjAx/NzBmYTlmY2U3ZjY0/ODFhNDQ5NjhjYmFm/NmM4ZDUyYjJjNA" },
       
        { name: "Bag", price: 39, image: "https://imgs.search.brave.com/y5FIbhP5bDhq75S6iKMFOK3bVUthXzolpg-GiudH--s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM3NjI3MTAyL3Iv/aWwvZWVmNTA5LzQ2/NDQ3NzM4MDkvaWxf/NjAweDYwMC40NjQ0/NzczODA5XzdubjUu/anBn" },
      ],
    },
    {
      name: "Amlan Sharma",
      story: "Weaving is my family’s heritage passed down for generations.",
      location: "Bongaigaon, Assam, India",
      products: [
        { name: "Silk Scarf", price: 49, image: "https://imgs.search.brave.com/MAeZEDErLt0h99AdjN6xnqw__gKW7lTX9ZyCMI6RgyY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RiLzNi/L2Q4L2RiM2JkOGU1/YmFkZDk0M2M1ZDll/ZWE1N2Q1YzQ1NGJk/LmpwZw" },
      ],
    },
  ];
  
  // Dynamically generate artisan cards
  const artisanGrid = document.getElementById("artisan-grid");
  
  artisans.forEach((artisan) => {
    const card = document.createElement("div");
    card.classList.add("artisan-card");
  
    const artisanHTML = `
      <h3>${artisan.name}</h3>
      <p>${artisan.story}</p>
      <p><strong>Location:</strong> ${artisan.location}</p>
      <h4>Products:</h4>
      ${artisan.products
        .map(
          (product) => `
          <div>
            <p>${product.name} - $${product.price}</p>
            <img src="${product.image}" alt="${product.name}">
          </div>
        `
        )
        .join("")}
    `;
  
    card.innerHTML = artisanHTML;
    artisanGrid.appendChild(card);
  });  
const menu = [{
  id:1,
  title: "Es Buah",
  category: "desserts",
  price: 15.99,
  image:"assets/Img/menu-item1.jpg",
  description: "Asli deh, es buah kita rasanya paling enak soalnya dibuat dengan sepenuh hati. Sekarang kamu juga bisa order lewat aplikasi ojek online favorit kamu.",
},
{
  id:2,
  title: "Tahu Kecap",
  category: "breakfast",
  price: 14.59,
  image:"assets/Img/menu-item2.jpg",
  description: "Tahu merupakan makanan tradisional yang berbahan dasar kedelai. Di dalamnya kaya akan protein, kalsium, zat besi, rendah sodium, kolesterol dan kalori. Selain itu, tahu juga mempunyai kelebihan, yakni kandungan lemak jenuh yang rendah.",
},
{
  id:3,
  title: "Telur Rebus",
  category: "shakes",
  price: 13.99,
  image:"assets/Img/menu-item3.jpg",
  description: "Mungkin sulit untuk sebuah telur untuk menjadi seekor burung: akan lebih sulit baginya untuk belajar terbang jika masih menjadi telur. Kita adalah telur saat ini. Dan Anda tidak bisa hanya menjadi telur yang biasa-biasa saja, telur yang baik. Kita harus menetas atau kita menjadi buruk.",
},
{
  id:4,
  title: "Hamburger",
  category: "lunch",
  price: 13.55,
  image:"assets/Img/menu-item4.jpg",
  description: "Hamburger yang terbaik adalah yang sederhana, juicy, dan berantakan.",
},
{
  id:5,
  title: "spicy food",
  category: "breakfast",
  price: 15.55,
  image:"assets/Img/menu-item5.jpg",
  description: "Sebuah hidangan pedas adalah kesempurnaan yang dibungkus dalam rasa.",
},
]
// Algoritma
// 1. membuat variabel untuk mengambil class section-center sebagai variabel rendering 
const containerBtn = document.querySelector(".btn-container")
const sectionCenter = document.querySelector(".section-center")
console.log(sectionCenter)
// 2. kita membuat event untuk load semua data menu di halaman web supaya render content nya tidak terlalu lama salah satunya render image
document.addEventListener("DOMContentLoaded", () => {
  showItems(menu)
  const categories = menu.reduce((values,item) => {
    if(!values.includes(item.category)) {
     values.push(item.category)
    }
    return values
  }, ["all"])
  console.log(categories)
  const categoryBtns = categories.map((menuCategory) => {
    return `<button class="filter-btn" data-id=${menuCategory} type="button">${menuCategory}</button>`
  }).join("")
  containerBtn.innerHTML = categoryBtns;
  
  // 3. next step adalah memfilterkan itemnya sesuai dengan category
  const filterBtns = document.querySelectorAll(".filter-btn")
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let dataCategory = e.target.dataset.id;
    let filterMenu = menu.filter((menuItem) => {
      if(menuItem.category === dataCategory) {
        return menuItem;
      };
    })
    console.log(filterMenu)
    if(dataCategory === "all") {
      showItems(menu)
    } else {
      showItems(filterMenu)
    }
    console.log(dataCategory)
  })
})
})

function showItems(menuItems) {
  // 4. membuat funtion yang bernama showItems dan membuat variabel untuk menampung data menu dan menggunakan method map supaya semua data menu bisa di munculkan di tampilan websitenya
  let items = menuItems.map((item) => {
    return ` <article class="menu-item d-flex justify-content-center align-items-center">
    <img src="${item.image}" class="photo ms-5 rounded" alt=""/>
    <div class="item-info d-flex justify-content-center  align-items-center">
      <header class="d-flex mr-5">
      <h4 class="fs-4">${item.title}</h4>
      <h4 class="price mx-5 ps-5 fs-4">
      ${item.price}
      </h4>
    </header>
    <p class="item-text mx-4">
    ${item.description}
    </p>
    </div>
  </article>`
  })
  console.log(items.join(""))
  // 5. lalu kita render dengan menggunakan method innerHTML dan menggunakan method join supaya data menu nya menjadi format document/html.
  sectionCenter.innerHTML = items.join("");
}


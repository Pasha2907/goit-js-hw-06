const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let galleryList = document.querySelector(".gallery");

const element = images.map(({ url, alt }) => {
  let newItem = document.createElement("li");
  newItem.classList.add("list");
  let newItemImg = document.createElement("img");
  newItemImg.classList.add("item");
  newItemImg.alt = alt;
  newItemImg.src = url;
  newItem.append(newItemImg);
  galleryList.append(newItem);
});

console.log(galleryList);

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const Users = []

const information = new Date().getFullYear()
const lastModification = new Date(document.lastModified)

document.querySelector('#lastModified')
  .innerHTML = `@${information} Cedou Ramsey Pretoria`

document.querySelector('#currentyear')
  .innerHTML = `${lastModification}`


let selectElement = document.querySelector('#productName');
let renderHtml = '<option value="" disabled selected>Select a Product ...</option>';
products.forEach(product => {
  let values = `
    <option id="${product.id}">${product.name}</option>
   `
  renderHtml += values;
})
selectElement.innerHTML = renderHtml;

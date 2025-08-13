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
  .innerHTML = `© ${information} Cedou Ramsey Pretoria`

document.querySelector('#currentyear')
  .innerHTML = `Last Modified: ${lastModification.toLocaleDateString()}`

let selectElement = document.querySelector('#productName');
let renderHtml = '';
products.forEach(product => {
  let values = `
        <option value="${product.id}">${product.name}</option>
       `
  renderHtml += values;
})
selectElement.innerHTML += renderHtml;




// Save review when form is submitted
document.querySelector('form').addEventListener('submit', function (e) {
  // Get how many reviews we have saved (starts at 0 if none)
  const reviewCount = localStorage.getItem('reviewCount');
  if (reviewCount == null) {
    reviewCount = 0;
  } else {
    reviewCount = Number(reviewCount);
  }

  // Add 1 to the count
  reviewCount = reviewCount + 1;

  // Save the new count
  localStorage.setItem('reviewCount', reviewCount);

  // Get the form data the simple way
  const productName = document.getElementById('productName').value;
  const rating = document.querySelector('input[name="overallRating"]:checked').value;
  const installDate = document.getElementById('installDate').value;
  const writtenReview = document.getElementById('writtenReview').value;
  const userName = document.getElementById('userName').value;

  // Get checked features
  const features = [];
  const checkboxes = document.querySelectorAll('input[name="usefulFeatures"]:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    features.push(checkboxes[i].value);
  }

  // Create a simple review object
  const reviewData = {
    productName: productName,
    overallRating: rating,
    installDate: installDate,
    usefulFeatures: features,
    writtenReview: writtenReview,
    userName: userName,
    reviewNumber: reviewCount
  };

  // Save this review (convert object to text for storage)
  localStorage.setItem('review_' + reviewCount, JSON.stringify(reviewData));
  console.log('hello')
});

//function to get review count
function getReviewCount() {
  const count = localStorage.getItem('reviewCount');
  if (count == null) {
    return 0;
  }
  return Number(count);
}
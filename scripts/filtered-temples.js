//function for navbar
function toggleNavbar() {
  let navElement = document.querySelector('.nav-small-screens');
  if (navElement.style.display === '' || navElement.style.display === 'none') {
    navElement.style.display = 'block';
    navElement.classList.add('active');
  } else {
    navElement.style.display = 'none';
    navElement.classList.remove('active');
  }
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    ImageDescription: "Nigeria-Temple"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    ImageDescription: "Manti Utah-Temple"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    ImageDescription: "Payson Utah-Temple"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    ImageDescription: "Yigo, Guam-Temple"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    ImageDescription: "Washington D.C-Temple"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    ImageDescription: "Lima Perú-Temple"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    ImageDescription: "Mexico City Mexico-Temple"
  },
  {
    templeName: "Super Mario",
    location: "Drc congo",
    dedicated: "2005, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    ImageDescription: "Super Mario -Temple"
  },
  {
    templeName: "United stand",
    location: "Manchester",
    dedicated: "2008, December, 20",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    ImageDescription: "Manchester-Temple"
  },
  {
    templeName: "Park de prance",
    location: "Paris",
    dedicated: "2000, December, 20",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    ImageDescription: "Park de prance-Temple"
  }
];

let renderHtml = '';
temples.forEach(templesValues => {
  renderHtml += `    
    <section>
      <h1>${templesValues.templeName}</h1>
      <p><span>Location</span> : ${templesValues.location}</p>
      <p><span>Dedicated</span> : ${templesValues.dedicated}</p>
      <p><span>Size</span> : ${templesValues.area}</p>
    <div class="image_container">
      <img src="${templesValues.imageUrl}" loading="lazy" alt="${templesValues.ImageDescription}">
    </div>
    </section>
    `
})
const htmlMainElement = document.querySelector('.js_render_html')
htmlMainElement.innerHTML = renderHtml;

const information = new Date().getFullYear()
const lastModification = new Date(document.lastModified)

document.querySelector('#lastModified')
  .innerHTML = `@${information} Cedou Ramsey Pretoria`

document.querySelector('#currentyear')
  .innerHTML = `${lastModification}`

//temples built before 1900
const oldTemples = document.querySelectorAll('.links1');
const allOldTemples = oldTemples.forEach(templesValues => {
  templesValues.addEventListener('click', filterTemplesOld)
})


// filter for temples older then 1990 
function filterTemplesOld() {
  // Filter temples built before 1900
  const oldTemples = temples.filter(templesValues => {
    let workOn = Number(templesValues.dedicated.slice(0, 4));
    return workOn < 1900;
  });
  // Generate HTML for filtered temples
  let renderHtml = '';
  oldTemples.forEach(templesValues => {
    renderHtml += `    
      <section>
        <h1>${templesValues.templeName}</h1>
        <p><span>Location</span> : ${templesValues.location}</p>
        <p><span>Dedicated</span> : ${templesValues.dedicated}</p>
        <p><span>Size</span> : ${templesValues.area}</p>
      <div class="image_container">
        <img src="${templesValues.imageUrl}" loading="lazy" alt="${templesValues.ImageDescription}">
      </div>
      </section>
   `
  });
  // Update the display
  const htmlMainElement = document.querySelector('.js_render_html');
  htmlMainElement.innerHTML = renderHtml;
}

//temples built before  2000
const newTemples = document.querySelectorAll('.links2');
const allNewTemples = newTemples.forEach(templesValues => {
  templesValues.addEventListener('click', filterTemplesNew);
})


//filter for temples older then 2000
function filterTemplesNew() {
  const newTemples = temples.filter(templesValues => {
    let workOn = Number(templesValues.dedicated.slice(0, 4));
    return workOn > 2000;
  });

  // Generate HTML for filtered temples
  let renderHtml = '';
  newTemples.forEach(templesValues => {
    renderHtml += `    
      <section>
        <h1>${templesValues.templeName}</h1>
        <p><span>Location</span> : ${templesValues.location}</p>
        <p><span>Dedicated</span> : ${templesValues.dedicated}</p>
        <p><span>Size</span> : ${templesValues.area}</p>
      <div class="image_container">
        <img src="${templesValues.imageUrl}" loading="lazy" alt="${templesValues.ImageDescription}">
      </div>
      </section>
   `
  });
  // Update the display
  const htmlMainElement = document.querySelector('.js_render_html');
  htmlMainElement.innerHTML = renderHtml;
}


//temples larger than 90,000 square feet
const largeTemples = document.querySelectorAll('.links3');
const allLargeTemples = largeTemples.forEach(templesValues => {
  templesValues.addEventListener('click', showLargeTemples);
})


function showLargeTemples() {
  const largeTemples = temples.filter(templesValues => {
    let workOn = templesValues.area;
    return workOn > 90000;
  })
  // Generate HTML for filtered temples
  let renderHtml = '';
  largeTemples.forEach(templesValues => {
    renderHtml += `    
      <section>
        <h1>${templesValues.templeName}</h1>
        <p><span>Location</span> : ${templesValues.location}</p>
        <p><span>Dedicated</span> : ${templesValues.dedicated}</p>
        <p><span>Size</span> : ${templesValues.area}</p>
      <div class="image_container">
        <img src="${templesValues.imageUrl}" loading="lazy" alt="${templesValues.ImageDescription}">
      </div>
      </section>
   `
  });
  // Update the display
  const htmlMainElement = document.querySelector('.js_render_html');
  htmlMainElement.innerHTML = renderHtml;
}


// temples smaller than 10,000 square feet
const smallTemples = document.querySelectorAll('.links4');
const allSmallTemples = smallTemples.forEach(templesValues => {
  templesValues.addEventListener('click', showSmallTemples);
})


function showSmallTemples() {
  const smallTemples = temples.filter(templesValues => {
    let workOn = templesValues.area;
    return workOn < 10000;
  })
  let renderHtml = '';
  smallTemples.forEach(templesValues => {
    renderHtml += `    
    <section>
      <h1>${templesValues.templeName}</h1>
      <p><span>Location</span> : ${templesValues.location}</p>
      <p><span>Dedicated</span> : ${templesValues.dedicated}</p>
      <p><span>Size</span> : ${templesValues.area}</p>
    <div class="image_container">
      <img src="${templesValues.imageUrl}" loading="lazy" alt="${templesValues.ImageDescription}">
    </div>
    </section>
    `
  });
  // Update the display
  const htmlMainElement = document.querySelector('.js_render_html');
  htmlMainElement.innerHTML = renderHtml;
}


//displays all the temples stored in the array.
const allTemples = document.querySelectorAll('.links5');
const bothTemplesBtn = allTemples.forEach(templesValues => {
  templesValues.addEventListener('click', allTemplesHome);
})


function allTemplesHome() {
  const allTemples = temples;
  let renderHtml = '';
  allTemples.forEach(templesValues => {
    renderHtml += `    
    <section>
      <h1>${templesValues.templeName}</h1>
      <p><span>Location</span> : ${templesValues.location}</p>
      <p><span>Dedicated</span> : ${templesValues.dedicated}</p>
      <p><span>Size</span> : ${templesValues.area}</p>
    <div class="image_container">
      <img src="${templesValues.imageUrl}" loading="lazy" alt="${templesValues.ImageDescription}">
    </div>
    </section>
    `
  })
  const htmlMainElement = document.querySelector('.js_render_html');
  htmlMainElement.innerHTML = renderHtml;
}
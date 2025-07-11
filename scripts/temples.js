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


const information = new Date().getFullYear()
const lastModification = new Date(document.lastModified)

document.querySelector('#lastModified')
  .innerHTML = `@${information} Cedou Ramsey Pretoria`

document.querySelector('#currentyear')
  .innerHTML = `${lastModification}`
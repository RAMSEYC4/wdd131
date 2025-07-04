const information = new Date().getFullYear()
const lastModification = new Date(document.lastModified)

document.querySelector('#lastModified')
  .innerHTML = `@${information} Cedou Ramsey Pretoria`

document.querySelector('#currentyear')
  .innerHTML = `${lastModification}`

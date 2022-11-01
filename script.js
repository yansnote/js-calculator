var dispaly = document.getElementById('display')

document.querySelectorAll('.btn').forEach(elem => {
  elem.addEventListener('click', event => {
    dispaly.value += elem.dataset.value
  })
})
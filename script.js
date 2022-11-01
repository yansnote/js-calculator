var dispaly = document.getElementById('display')

document.querySelectorAll('.btn').forEach(elem => {
  elem.addEventListener('click', event => {
    
    switch (elem.dataset.type) {
      case 'number':
        dispaly.value = parseFloat(display.value + elem.dataset.value)
        break;
    
      default:
        break;
    }

  })
})
var dispaly = document.getElementById('display')
var recentDisplay = document.querySelector('.recent')

var view = 0
var recent = ''

var variableOne = null
var variableTwo = null
var operator = null
var next = false

document.querySelectorAll('.btn').forEach(elem => {
  elem.addEventListener('click', event => {
    
    switch (elem.dataset.type) {
      case 'number':
        handleNumber(elem.dataset.value)
        break

      case 'operator':
        handleOperator(elem.dataset.value)
        break

      case 'percent':
        handlePercent()
        break

      case 'clear':
        handleClear()
        break

      case 'del':
        handleDelete()
        break

      case 'result':
        handleResult()
        break
    }

    show()

  })
})

function handleClear() {
  view = 0
  recent = ''

  variableOne = null
  variableTwo = null
  operator = null
  next = false
}

function handleDelete() {
  if (next) {
    return
  }

  if (view.toString().length > 1) {
    view = view.toString().slice(0, view.toString().length - 1)
  } else {
    view = '0'
  }

  if (operator) {
    variableTwo = parseFloat(view)
  } else {
    variableOne = parseFloat(view)
  }
}

function handleNumber(numb) {
  if (next) {
    view = 0
    next = false
  }

  view = view.toString() + numb

  if (operator) {
    variableTwo = parseFloat(view)
  } else {
    variableOne = parseFloat(view)
  }
}

function handleResult() {
  if (!operator || !variableTwo) {
    return
  }

  var result

  switch(operator) {
    case '+':
      result = variableOne + variableTwo
      break
    
    case '-':
      result = variableOne - variableTwo
      break

    case '*':
      result = variableOne * variableTwo
      break

    case '/':
      result = variableOne / variableTwo
      break
  }

  view = result
  variableOne = result
  variableTwo = null
  next = true
}

function handlePercent() {
  if (!variableTwo || !operator) {
    return
  }

  variableTwo = (variableTwo / 100) * variableOne
  view = variableTwo
}

function handleOperator(args) {
  next = true
  operator = args

  variableOne = variableOne ? variableOne : 0

  if (variableTwo) {
    handleResult()
  }
}

function show() {
  if (view[view.toString().length - 1] != '.') {
    view = parseFloat(view)
  }

  if (!next) {
    recent = variableOne ? variableOne.toString() : ''
    recent += operator ? ' ' + operator + ' ' : ''
    recent += variableTwo ? variableTwo : ''

    const node = document.createElement('small')
    const textNode = document.createTextNode(recent)

    recentDisplay.innerHTML = `<small>${recent}</small>`
  }

  dispaly.value = view
}
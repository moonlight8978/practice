const renderItem = item => `<li class="list-group-item list-group-item-action">${item}</li>`
const renderList = items => `
  <ul class="list-group">
    ${items.map((_item, index) => renderItem(`Item ${index}`)).join('')}
  </ul>
`

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min)
const createItems = () => (new Array(getRandomInt(1, 10))).fill(0)

let timer
let timer2

$(document).on('input', 'input', function(event) {
  const $this = $(this)
  const $form = $this.parent('form')
  const $result = $form.find('.search-results')

  $form.removeClass('loading')
  clearTimeout(timer)
  clearTimeout(timer2)

  if ($this.val().trim() === '') {
    $result.removeClass('fade-in-down')
    return false
  }

  timer = setTimeout(async () => {
    $form.addClass('loading')
    const response = await callApi()
    $form
      .removeClass('loading')
      .find('.search-results')
        .trigger('data:receive', [response])
  }, 500)
})

$('.search-results').on('data:receive', function(event, data) {
  $(this)
    .html(data)
    .addClass('fade-in-down')
})

$('.search-results').on('data:reset', function(event) {
  $(this).empty()
})

$(document).on(
  'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
  '.search-results',
  function(event) {

  if (event.originalEvent.propertyName === 'top') {
    const $this = $(this)
    if (!$this.is('.fade-in-down')) {
      $this.empty()
    }
  }
})

function callApi() {
  const items = createItems()
  return new Promise((resolve, reject) => {
    timer2 = setTimeout(function () {
      resolve(renderList(items))
    }, 2000)
  })
}

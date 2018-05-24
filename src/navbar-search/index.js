const renderItem = item => `<li class="list-group-item list-group-item-action">${item}</li>`
const renderList = (items) =>  `
  <ul class="list-group">
    ${items.map((item, index) => renderItem('Item' + index)).join('')}
  </ul>
`

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createItems = () => {
  const items = new Array(getRandomInt(1, 10))
  items.fill(0)

  return items
}

let timeout
$(document).on('input', 'input', function(event) {
  const $this = $(this)

  clearTimeout(timeout)
  if ($this.val().trim() !== '') {
    timeout = setTimeout(() => {
      const items = createItems()

      $this.parent('form').find('.search-results')
        .html(renderList(items))
        .addClass('fade-in-down')
    }, 500)
  } else {
    $this.parent('form').find('.search-results')
      .removeClass('fade-in-down')
  }
})

$(document).on(
  'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
  '.search-results',
  function(event) {
  if (event.originalEvent.propertyName === 'top') {
    console.log(0);
    const $this = $(this)
    if (!$this.is('.fade-in-down')) {
      $this.empty()
    }
  }
})

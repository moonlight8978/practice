$(document)
  .on('click', '#sidebar-toggler', function(event) {
    $('.sidebar').addClass('in')
  })
  .on('click', '.sidebar-backdrop', function(event) {
    $('.sidebar').removeClass('in')
  })
  .on('click', '.sidebar-content', function(event) {
    event.stopPropagation()
  })

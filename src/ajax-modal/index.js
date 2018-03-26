const html = `
  <div class="animated fadeIn">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      <br><br>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <br><br>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
      <br><br>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      <br><br>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <br><br>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
      <br><br>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      <br><br>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <br><br>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
      <br><br>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      <br><br>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <br><br>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
      <br><br>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      <br><br>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <br><br>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
      <br><br>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      <br><br>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      <br><br>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn-primary btn-append-data">Save changes</button>
    </div>
  </div>
`

let i = 1;
function dataFromServer(id) {
  return `
    <div id="item-${id}" class="item">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary">
        Launch demo modal
      </button>
    </div>
  `
}

const loading = `<div class="modal-loading"></div>`

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(1)
      resolve(1)
    }, 3000)
  })
}

let modalLoading = true

$(document).on("click", ".btn", function(event) {
  modalLoading = true
  const $this = $(this)
  const $modal = $(".modal")
  const $modalContent = $modal.find(".modal-content")
  const $item = $this.closest('.item')

  $modal.attr('for', `#${$item.attr('id')}`)
  $modal.modal("show")
  $this.trigger("fuck")
  getData()
    .then((data) => {
      if (modalLoading) {
        $modalContent.html(html)
      }
    })
})

$(document).on("fuck", ".btn", function(event) {

  console.log("fuck");
})
$(document).on("show.bs.modal", ".modal", function(event) {

})

$(document).on("hidden.bs.modal", ".modal", function(event) {
  modalLoading = false
  const $this = $(this)
  const $modalContent = $this.find(".modal-content")
  console.log("hide")
  $modalContent.html(loading)
})

$(document).on("click", ".btn-append-data", function(event) {
  event.preventDefault()

  const $modal = $(this).closest('.modal')
  const appendToSelector = $modal.attr('for')
  $modal.modal('hide')
  $(appendToSelector).closest('.data-container').append(dataFromServer(++i));
})

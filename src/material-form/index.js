'use strict'

$(document).on("focus", "input.form-control", function () {
  decideLabelClass(this, function ($label, placeholder, value) {
    if (!placeholder && !value) {
      $label.removeClass('placeholder')
    }
  })
})

$(document).on("focusout", "input.form-control", function () {
  decideLabelClass(this, function ($label, placeholder, value) {
    if (!placeholder && !value) {
      $label.addClass('placeholder')
    }
  })
})

$(document).ready(function () {
  $("input.form-control").each(function (index) {
    decideLabelClass(this, function ($label, placeholder, value) {
      if (!placeholder && !value) {
        $label.addClass('placeholder')
      }
    })
  })
})

function decideLabelClass(element, action) {
  const $element = $(element)
  const $label = $element.next("label")
  const placeholder = $element.attr('placeholder')
  const value = $element.val()

  action($label, placeholder, value)
}

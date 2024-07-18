"use strict";

function removeTask(target) {
  var confirm = window.confirm('Ви точно хочете видалити цю таску ?');
  if (confirm) {
    target.parent().remove();
  }
}
function openModal(taskDescription) {
  console.log('tas', taskDescription);
  $('.modal-body p').text(taskDescription);
  $('.modal').show();
}
$('#close-modal').on('click', function () {
  $('.modal').hide();
});
$('.btn-close').on('click', function () {
  $('.modal').hide();
});
$('.js--form').on('submit', function (event) {
  event.preventDefault();
  var value = $('.js--form__input').val();
  var li = $('<li></li>');
  $(li).html("\n    <input type=\"checkbox\">\n    <span class=\"todo-item__description\">\n      ".concat(value, "\n    </span>\n    <button class=\"todo-item__delete\">\n      \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438\n    </button>\n  "));
  li.appendTo('.js--todos-wrapper');
});
$('.js--todos-wrapper').on('click', function (event) {
  var target = $(event.target);
  if (target.hasClass('todo-item__delete')) {
    removeTask(target);
    return;
  }
  if (target.hasClass('todo-item__description')) {
    openModal(target.text());
  }
});
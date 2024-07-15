function removeTask(target) {
  const confirm = window.confirm('Ви точно хочете видалити цю таску ?');

  if (confirm) {
    target.parent().remove();
  }
}

function openModal(taskDescription) {
  console.log('tas', taskDescription);
  
  $('.modal-body p').text(taskDescription);
  $('.modal').show();
}

$('#close-modal').on('click', () => {
  $('.modal').hide();
});

$('.btn-close').on('click', () => {
  $('.modal').hide();
});

$('.js--form').on('submit', (event) => {
  event.preventDefault();
  const value = $('.js--form__input').val();
  const li = $('<li></li>');

  $(li).html(`
    <input type="checkbox">
    <span class="todo-item__description">
      ${value}
    </span>
    <button class="todo-item__delete">
      Видалити
    </button>
  `);

  li.appendTo('.js--todos-wrapper');
});

$('.js--todos-wrapper').on('click', (event) => {
  const target = $(event.target);

  if (target.hasClass('todo-item__delete')) {
    removeTask(target);

    return;
  }

  if (target.hasClass('todo-item__description')) {
    openModal(target.text());
  }
});
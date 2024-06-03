document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  const name = form.querySelector('[name=name]');
  const message = form.querySelector('[name=message]');
  const phone = form.querySelector('[name=phone]');
  const email = form.querySelector('[name=email]');

  function validateName() {
    const regex = /\S/;

    return handleError('name', regex.test(name.value));
  }

  function validateMessage() {
    const regex = /^.{5,}$/;

    return handleError('message', regex.test(message.value));
  }

  function validatePhone() {
    const regex = /^\+380/;
    return handleError('phone', regex.test(phone.value));
  }

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return handleError('email', regex.test(email.value));
  }

  function validateAll() {
    const funcArray = [validateName, validateMessage, validatePhone, validateEmail];
    const funcResults = funcArray.map((item) => item());
    const isValid = funcResults.every((item) => item);

    return isValid;
    
  }

  function handleError(fieldName, isValid) {
    const field = form.querySelector(`[name=${fieldName}]`);
    const error = field.nextElementSibling;
    
    if (isValid) {
      field.style.borderColor = '#000';
      error.style.display = 'none';

      return true;
    }

    field.style.borderColor = 'red';
    error.style.display = 'block';
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = validateAll(); 

    if (!isValid) {
      return;
    }

    const formData = new FormData(form);
    formData.set('phone', `+${formData.get('phone')}`);

    for (let value of formData.entries()) {
      console.log(value);
    }

    alert('Форма успішно відправлена!');

  });

  form.addEventListener('input', () => {
    validateAll();
  });
});
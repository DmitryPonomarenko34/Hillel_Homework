const ERROR = 'error';
const ERROR_FIELD = 'error-field';
const VALID_FIELD = 'valid-field';

function Validate(form) {
  this.form = form;
  this.validArray = [];

  this.required = function () {
    const fields = this.form.querySelectorAll('[data-type="required"]');

    for (const field of fields) {
      if (!field.value.length) {
        this.validArray[0] = false;
        break;
      }

      this.validArray[0] = true;
    }

    for (const field of fields) {
      const isErrorExist = field.nextElementSibling.classList.contains(ERROR);
      
      if (field.value.length && isErrorExist) {
        field.nextElementSibling.remove();
        field.classList.remove(ERROR_FIELD);
        field.classList.add(VALID_FIELD);

        continue;
      }

      if (!isErrorExist && !field.value.length) {  
        const error = document.createElement('p');

        field.classList.add(ERROR_FIELD);
        field.classList.remove(VALID_FIELD);
        error.classList.add(ERROR)      
        error.textContent = 'Поле обов\'язкове';

        field.after(error);

        continue;
      }
    }

    return this;
  }

  this.email = function () {
    const fields = this.form.querySelectorAll('[data-type="email"]');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    for (const field of fields) {
      const isValid = regex.test(field.value);

      if (!isValid) {
        this.validArray[1] = false;
        break;
      }

      this.validArray[1] = true;
    }

    for (const field of fields) {
      const isErrorExist = field.nextElementSibling.classList.contains(ERROR);
      const isValid = regex.test(field.value);
      
      if (isValid && isErrorExist) {
        field.nextElementSibling.remove();
        field.classList.remove(ERROR_FIELD);
        field.classList.add(VALID_FIELD);

        continue;
      }

      if (!isErrorExist && !isValid) {  
        const error = document.createElement('p');

        field.classList.add(ERROR_FIELD);
        field.classList.remove(VALID_FIELD);
        error.classList.add(ERROR)      
        error.textContent = 'Не валідна електронна адреса';

        field.after(error);

        continue;
      }
    }

    return this;

  }

  this.minLength = function () {
    const fields = this.form.querySelectorAll('[data-type="minLength"]');
    const length = 5;

    for (const field of fields) {

      if (field.value.length !== 0 && field.value.length < length) {
        this.validArray[2] = false;
        break;
      }

      this.validArray[2] = true;
    }

    for (const field of fields) {
      const isErrorExist = field.nextElementSibling.classList.contains(ERROR);

      if (!field.value.length && !isErrorExist) {
        field.classList.remove(ERROR_FIELD);
        field.classList.add(VALID_FIELD);

        continue;
      }

      if ((field.value.length >= length || field.value.length === 0) && isErrorExist) {
        field.nextElementSibling.remove();
        field.classList.remove(ERROR_FIELD);
        field.classList.add(VALID_FIELD);

        continue;
      }

      if (!isErrorExist && (field.value.length && field.value.length < 5)) {  
        const error = document.createElement('p');

        field.classList.add(ERROR_FIELD);
        field.classList.remove(VALID_FIELD);
        error.classList.add(ERROR)      
        error.textContent = 'Мінімальна довжина 5 символів';

        field.after(error);

        continue;
      }
    }

    return this;

  }

  this.isValid = function () {
    if (this.validArray.length === 0) {
      return true;
    }

    return this.validArray.every((elem) => elem);
  }
}

const form = document.querySelector('#form');
const validate = new Validate(form);

form.addEventListener('input', (event) => {
  validate.required().email().minLength();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = validate.required().email().minLength().isValid(); 

  if (!isValid) {
    console.log('Форма не валідна!');

    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log('data', data);
});
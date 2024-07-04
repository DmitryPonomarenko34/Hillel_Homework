class FormValidate {
  static SUCCESS_CLASS_NAME = 'success';
  static ERROR_CLASS_NAME = 'error';
  static ERROR_ITEM_CLASS_NAME = 'error__item';
  static FORM_CONTROL_CLASS_NAME = 'form-group';

  constructor(form) {
    this.sended = null;
    this.elements = form.elements;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }

  checkFormElement() {
    return this;

  }

  checkForm() {
    return this;
    
  }

  errorTemplate(element, message) {
    const p = document.createElement('p');
    p.textContent = message;
    p.style.color = 'red';
    p.style.margin = '5px 0';
    p.classList.add(FormValidate.ERROR_CLASS_NAME);

    element.after(p);
    
    return this;
  }

  clearError(element) {
    const nextElem = element.nextElementSibling;

    if (nextElem.classList.contains(FormValidate.ERROR_CLASS_NAME) || nextElem.classList.contains(FormValidate.ERROR_CLASS_NAME)) {
      nextElem.remove();
    }

    return this;
  }
 
  required(element, message) {
    const isValid = element.value.length;

    if (!isValid) {
      element.classList.remove(FormValidate.SUCCESS_CLASS_NAME);
      element.classList.add(FormValidate.ERROR_CLASS_NAME);
      this.errorTemplate(element, message);
    } else {
      element.classList.remove(FormValidate.ERROR_CLASS_NAME);
      element.classList.add(FormValidate.SUCCESS_CLASS_NAME);
      this.clearError(element);
    }

    return this;
  }

  validEmail (element, message) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(element);

    if (!isValid) {
      element.classList.remove(FormValidate.SUCCESS_CLASS_NAME);
      element.classList.add(FormValidate.ERROR_CLASS_NAME);
      this.errorTemplate(element, message);
    } else {
      element.classList.remove(FormValidate.ERROR_CLASS_NAME);
      element.classList.add(FormValidate.SUCCESS_CLASS_NAME);
      this.clearError(element);
    }

    return this;
  }

  minLength(element, message) {
    const isValid = element.value.trim().length < 5;

    if (!isValid) {
      element.classList.remove(FormValidate.SUCCESS_CLASS_NAME);
      element.classList.add(FormValidate.ERROR_CLASS_NAME);
      this.errorTemplate(element, message);
    } else {
      element.classList.remove(FormValidate.ERROR_CLASS_NAME);
      element.classList.add(FormValidate.SUCCESS_CLASS_NAME);
      this.clearError(element);
    }

    return this;

  }
}

const form = document.querySelector('#form');
const validate = new FormValidate(form);

form.addEventListener('input', () => {
  const name = form.querySelector('input[name="name"]');
  const textarea = form.querySelector('textarea[message="message"]');
  const phone = form.querySelector('input[name="phone"]');
  const email = form.querySelector('input[name="email"]');

  validate
    .required(name, 'Ім\'я обов\'язкове!')
    .minLength(textarea, 'Мінімальна довжина 5 символів')
    .required(phone, 'Телефон обов\'язковий!')
    .validEmail(email, 'Електронна пошта не валідна')
    .required(email, 'Електронна пошта обов\'язкова!');
});



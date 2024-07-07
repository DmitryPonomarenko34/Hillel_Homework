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

  checkFormElement() {}
  
  checkForm() {}

  errorTemplate(element, message) {}

  clearError(element) {}
 
  required(element, message) {}

  validEmail (element, message) {}

  minLength(element, message) {}
}

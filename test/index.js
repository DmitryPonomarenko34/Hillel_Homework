const ERROR = 'error';

function Email(elem) {
  this.element = this.element;
}

function Validate(formChildren) {
  this.formChildren = formChildren;

  this.checkElem = function (element) {
    const value = element.value.trim();
    const errorText = document.createElement('p').classList.add(ERROR);

    
    if (value.length === '') {
      element.classList.add(ERROR);
      errorText.textContent = 'Поле обов\'язкове';
      element.after(errorText)

      return;
    }

    if (value.length < 5) {
      element.classList.add(ERROR);
      errorText.textContent = 'Поле повинно містити не менше 5 символів';
      element.after(errorText);
  
      return;
    }
  }

  function check() {
    this.formChildren.forEach(element => {
      this.checkElem(element);
    });
  };
}

// Đối tượng 'Validator'
const Validator = (options) => {
    const formElement = document.querySelector(options.form);
    if(formElement) {

    }
}

// Định nghĩa các rules
Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: () => {

        }
    }
}

Validator.isEmail = () => {
    
}
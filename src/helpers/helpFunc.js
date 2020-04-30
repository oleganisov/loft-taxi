export const errorMsg = (errorObject) => {
    if (errorObject) {
        switch (errorObject.type) {
            case 'required':
                return 'Обязательно для заполнения';
            case 'pattern':
                return 'Неверный формат';
            case 'minLength':
                return 'Минимальная длина 6 символов';
            default:
                return '';
        }
    } else {
        return '';
    }
};

export const required = value => value ? undefined : 'Нужно заполнить!';
export const correctEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Некорректный Email'

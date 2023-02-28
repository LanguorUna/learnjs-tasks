let login = ''
const message = (login == 'Сотрудник')
    ? 'Привет'
    :  (login == 'Директор')
        ? 'Здравствуйте'
        : (login == '')
            ? 'Нет логина'
            : ''

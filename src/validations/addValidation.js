const { check, body } = require('express-validator');

module.exports = [
    check('title')
        .notEmpty().withMessage('Ponga el título'),

    check('rating')
        .notEmpty().withMessage('Ponga el rating').bail()
        .isDecimal().withMessage('El rating debe ser un número'),

    check('awards')
        .notEmpty().withMessage('Ponga la cantidad de premios.').bail()
        .isDecimal().withMessage('Dbe ser un número'),

    check('release_date')
        .notEmpty().withMessage('Ponga la fecha de estreno'),

    check('length')
        .notEmpty().withMessage('Ponga la duración.').bail()
        .isDecimal().withMessage('La duración debe ser un número'),
]
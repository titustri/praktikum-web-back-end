const { check } = require('express-validator');

exports.createUserValidation = [
    check('nama', 'nama tidak boleh kosong').not().isEmpty(),
    check('username', 'username tidak boleh kosong').not().isEmpty(),
    check('telp', 'No telp tidak boleh kosong').not().isEmpty(),
    check('email', 'Email tidak valid').isEmail(),
    check('password', 'Password minimal 6 karakter').isLength({ min: 6 })
]

exports.loginValidation = [
    check('identity', 'identity tidak boleh kosong').not().isEmpty(),
    check('password', 'password tidak boleh kosong').not().isEmpty()
]

exports.updateUserValidation = [
    check('nama', 'Nama tidak boleh kosong').not().isEmpty(),
    check('username', 'Username tidak boleh kosong').not().isEmpty(),
    check('telp', 'Nomor Telepon tidak boleh kosong').not().isEmpty(),
    check('email', 'Email tidak valid').isEmail()
]

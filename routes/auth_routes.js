const { Router } = require('express')
const crypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const Users = require('../models/Users')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный ввод').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректная данные для регистрации'
            })
        }
        const {email, password} = req.body
        const registering = await User.findOne({ email })

        if (registering) {
           return res.status(400).json({message: 'Такой пользователь уже есть - авторизуйтесь'})
        }

        const hachedPass = await crypt.hash(password, 12)
        const user = new User({email, password: hachedPass})

        await user.save()

        res.status(201).json({message: 'Пользователь создан '})


    } catch (err) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова....'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректная данные для входе'
            })
        }
       


    } catch (err) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова....'})
    }

})

module.exports = router
const { User } = require('../models');
const { HTTP_STATUS, HTTP_TEXT } = require('../constant');
const bcrypt = require('bcrypt');

function login(request, response) {
    const { email, password } = request.body;

    User.authenticate(email, password.toString(), false, result => {
        return response.status(HTTP_STATUS.OK).json(result);
    }, err => {
        return response.status(err.status).json(err);
    });

}

async function postSignUp(request, response) {
    const { full_name, email, password, passwordConfirm } = request.body;
    try {
        existUser = await User.findOne({ email: email });

        if (existUser) {
            let err = new Error();
            err.code = 'EXIST_USER';
            throw err;
        }

        if (password !== passwordConfirm) {
            let err = new Error();
            err.code = 'PASSWORD_DIFFERENCE';
            throw err;
        }
        
        if(password.length < 6) {
            let err = new Error();
            err.code = 'LEAST_6_CHARACTER';
            throw err;
        }

        let hashPassword = bcrypt.hashSync(password, 12);
        user = new User({
            email,
            profile: { full_name },
            password_not_hash: password,
            password: hashPassword,
        });

        await user.save();

        request.logIn(user, {}, function (error) {
            return response.status(HTTP_STATUS.OK).json({
                code: 'OK'
            });
        })
    } catch (error) {
        console.error(error);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            code: error.code || HTTP_TEXT.SERVER_ERROR
        })
    }
}

module.exports = {
    login,
    postSignUp
}
const { HTTP_STATUS, HTTP_TEXT } = require('../constant');

function me(request, response) {
    try {
        user = request.user;
        return response.status(HTTP_STATUS.OK).json({
            _id: user._id,
            profile: user.profile,
            google_id: user.google_id,
            facebook_id: user.facebook_id,
            email: user.email,
            createdAt: user.createdAt,
        });
    } catch (err) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            code: HTTP_STATUS.SERVER_ERROR,
            message: '',
        })
    }
}

async function logout(request, response) {
    try {
        user = request.user;
        token = request.token;
        user.tokens = user.tokens.filter(item => item.token !== token);
        await user.save();
        
        return response.status(HTTP_STATUS.OK).json({
            code: 'OK',
        })
    } catch (err) {
        console.log(err);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            code: HTTP_STATUS.SERVER_ERROR,
            message: '',
        })
    }
}

module.exports = {
    me,
    logout,
}
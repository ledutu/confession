const { User, RootQuestion } = require('../models');
const { HTTP_STATUS, HTTP_TEXT } = require('../constant')

async function index(request, response) {
    try {
        let { page, limit } = request.query;

        page = parseInt(page);
        limit = parseInt(limit);

        rootQuestions = RootQuestion.find({
            is_block: false,
            is_hide: false,
        });
        let totalRootQuestion = RootQuestion.find({
            is_block: false,
            is_hide: false,
        });

        rootQuestions = rootQuestions
            .sort({ createdAt: -1 })
            .select(['-is_hide', '-is_block'])
            .populate('category', ['title', 'tag_color'])
            .populate('user', ['email', 'profile'])
            .populate('questions', ['-is_hide', '-is_block', '-updatedAt'])
            .populate('receiver');

        if (limit) {
            rootQuestions = rootQuestions
                .skip((page * limit) - limit)
                .limit(limit)
        }

        rootQuestions = await rootQuestions.lean();

        totalRootQuestion = await totalRootQuestion.countDocuments();

        const rootQuestionPage = {
            data: rootQuestions,
            total_page: Math.ceil(totalRootQuestion / limit),
            page,
            limit,
        }

        return response.status(HTTP_STATUS.OK).json(rootQuestionPage);

    } catch (error) {
        console.log(err);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            code: HTTP_STATUS.SERVER_ERROR,
            message: '',
        });
    }

}

async function getDetail(request, response) {
    try {
        const { id } = request.params;

        console.log(id);

        rootQuestions = await RootQuestion.findOne({
            _id: id,
            is_block: false,
            is_hide: false,
        }).select(['-is_hide', '-is_block'])
            .populate('category', ['title', 'tag_color'])
            .populate('user', ['email', 'profile'])
            .populate('questions', ['-is_hide', '-is_block', '-updatedAt'])
            .populate('receiver');

        if (!rootQuestions) {
            let err = new Error();
            err.code = HTTP_TEXT.NOT_FOUND;
            throw err;
        }

        return response.status(HTTP_STATUS.OK).json(rootQuestions);
    } catch (err) {
        console.log(err);
        return response.status(HTTP_STATUS.SERVER_ERROR).json({
            code: err.code || HTTP_TEXT.SERVER_ERROR,
            message: '',
        });
    }
}

module.exports = {
    index,
    getDetail
}
const mongoose = require('mongoose');
const { Schema } = mongoose;
const rootQuestionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    questions: [{ type: Schema.Types.ObjectId, ref: 'questions' }],
    category: { type: Schema.Types.ObjectId, ref: 'categories' },
    receiver: { type: Schema.Types.ObjectId, ref: 'users' },
    is_hide: { type: Schema.Types.Boolean, default: false },
    is_block: { type: Schema.Types.Boolean, default: false },
}, { timestamps: true });

const RootQuestion = mongoose.model('root_questions', rootQuestionSchema);

module.exports = {
    RootQuestion,
}


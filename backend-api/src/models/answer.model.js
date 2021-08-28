const mongoose = require('mongoose');
const { Schema } = mongoose;
const answerSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    question_id: { type: Schema.Types.ObjectId, required: true },
    answer: { type: Object, default: {} },
}, { timestamps: true });

const Answer = mongoose.model('answers', answerSchema);

module.exports = {
    Answer,
}


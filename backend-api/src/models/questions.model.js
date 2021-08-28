const mongoose = require('mongoose');
const { Schema } = mongoose;
const questionSchema = new Schema({
    title: [{ type: Schema.Types.String, default: false }],
    content: { type: Object, default: {} },
    answer: { type: Schema.Types.ObjectId, ref: 'answers' },
    is_hide: { type: Schema.Types.Boolean, default: false },
    is_block: { type: Schema.Types.Boolean, default: false },
}, { timestamps: true });

const Question = mongoose.model('questions', questionSchema);

module.exports = {
    Question,
}


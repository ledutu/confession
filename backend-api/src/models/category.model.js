const mongoose = require('mongoose');
const { Schema } = mongoose;
const categorySchema = new Schema({
    title: [{ type: Schema.Types.String, default: false }],
    tag_color: { type: Schema.Types.String, default: '' },
    is_hide: { type: Schema.Types.Boolean, default: false },
}, { timestamps: true });

const Category = mongoose.model('categories', categorySchema);

module.exports = {
    Category,
}


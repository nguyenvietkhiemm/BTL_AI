const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true, maxLength: 255 },
        description: { type: String },
        image: { type: String },
        videoID: { type: String, required: true },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name' }, // unique: true không tạo được unique slug mà bị lỗi
    },
    {
        _id: false,
        timestamps: true,
    },
);

// custom query helpers - giống add thêm hàm
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        return this.sort({
            [req.query.column]: req.query.type,
        });
    }
    return this;
};

// add plugins
CourseSchema.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
CourseSchema.plugin(AutoIncrement);
mongoose.plugin(slug);

module.exports = mongoose.model('Course', CourseSchema);

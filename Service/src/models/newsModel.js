const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    newsText: {
        type: String,
        required: true
    }
},{timestamps: true});

const News = mongoose.model('News', newsSchema);

module.exports = News;
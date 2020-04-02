const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    
});

var Leaders = mongoose.model('Leader', leaderSchema);
module.exports = Leaders;
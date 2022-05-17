const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxlenght: [20, 'name cannot be more than 20 characters']
    },
    completed: {
        type: String,
        default: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);
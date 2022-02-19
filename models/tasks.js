const mongoose = require("mongoose");

const schema = mongoose.Schema;

const taskSchema = new schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const tasks = mongoose.model("tasks", taskSchema);
module.exports = tasks;

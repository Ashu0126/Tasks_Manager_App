const res = require("express/lib/response");
const mongoose = require("mongoose");
const tasks = require("./models/tasks");
const yargs = require("yargs");
const { command } = require("yargs");

const dbURI =
  "mongodb+srv://node0123:node0123@nodetuts.rz4h3.mongodb.net/Tasks?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log();
  })
  .on("error", (error) => {
    console.log(error);
  });

// task input
const input = yargs.argv;

// for creating task
yargs.command({
  command: "create",
  describe: "Creating a Task",
  handler: function (input) {
    const task = new tasks({
      description: input.description,
      completed: input.completed,
    });
    task.save();
    console.log(task);
    console.log("!!!NEW Task Added!!!");
  },
});

//listing task
yargs.command({
  command: "list",
  describe: "Listing a Task",
  handler: function (input) {
    console.log("!!! TASKS LIST !!!");
    tasks
      .find(function (err, result) {
        if (err) return console.error(err);
        console.log(result);
      })
      .sort({ createdAt: -1 });
  },
});

//Listing Incomplete tasks
yargs.command({
  command: "incomplete",
  describe: "Listing Incomplete Tasks",
  handler: function (input) {
    console.log("!!! INCOMPLETE TASKS LIST !!!");
    tasks
      .find({ completed: false }, function (err, result) {
        if (err) return console.error(err);
        console.log(result);
      })
      .sort({ createdAt: -1 });
  },
});

//Deleting a task by entering the id
yargs.command({
  command: "delete",
  describe: "Deleting a Task",
  handler: function () {
    tasks.findByIdAndDelete({ _id: input.id }, function (err, result) {
      if (err) return console.error(err);
      console.log(result);
      console.log("!!! TASK DELETED !!!");
    });
  },
});

//Updating a task
yargs.command({
  command: "update",
  describe: "Updating a Task",
  handler: function (input) {
    tasks.findOneAndUpdate(
      { description: input.description },
      { completed: input.completed },
      (err, result) => {
        if (err) {
          console.error(err);
        }
        console.log(result);
        console.log("!!! TASK UPDATED !!!");
      }
    );
  },
});

yargs.parse();

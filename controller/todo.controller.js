const TodoModel = require("../models/todo.model");

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = await TodoModel.create({ title });
    await newTodo.save();
    res
      .status(201)
      .send({ message: "Todo created successfully", success: true });
  } catch (error) {
    res.status(500).send({ message: "Failed to create todo", success: false });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id, newTitle } = req.body;
    const isTodoAvailable = await TodoModel.findOne({ _id: id });
    if (isTodoAvailable) {
      await TodoModel.updateOne({ _id: id }, { title: newTitle });
      res
        .status(200)
        .send({ message: "Todo updated successfully", success: true });
    } else {
      res.status(404).send({ message: "Todo not found", success: false });
    }
  } catch (error) {
    res.status(500).send({ message: "internal server error", success: false });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const isTodoAvailable = await TodoModel.findOne({ _id: id });
    if (isTodoAvailable) {
      await TodoModel.deleteOne({ _id: id });
      res
        .status(200)
        .send({ message: "Todo deleted successfully", success: true });
    } else {
      res.status(404).send({ message: "Todo not found", success: false });
    }
  } catch (error) {
    res.status(500).send({ message: "internal server error", success: false });
  }
};

exports.fetchAllTodo = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).send({ todos, success: true });
  } catch (error) {
    res.status(500).send({ message: "internal server error", success: false });
  }
};

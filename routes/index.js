const router = require('express').Router()
const { createTodo, updateTodo, deleteTodo, fetchAllTodo } = require('../controller/todo.controller')


router.post("/create-todo", createTodo)
router.post("/update-todo", updateTodo)
router.post("/delete-todo", deleteTodo)
router.get("/all-todos", fetchAllTodo)

module.exports = router
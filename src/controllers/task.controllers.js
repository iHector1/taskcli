const Task = require('../models/Task')
const { connection } = require('../database')
const addTask = async (task) => {
    await Task.create(task);
    console.log("New Task Created");
    await connection.close();
}
const listTask = async () => {
    const tasks = await Task.find().lean()
    console.table(tasks.map(task => ({
        id: task._id.toString(),
        title: task.title,
        description: task.description,

    })));
    await connection.close();
    process.exit(0);
}
const deleteTask = async (id) => {
    await Task.findByIdAndDelete(id)
    console.log('Task Delete')
    await connection.close()
    process.exit(0)
}
const updateTask = async (id, task) => {
    await Task.updateOne({ id }, task)
    console.log('Task Updated')
    await connection.close();
    process.exit(0)
}
const findTask = async (text) => {
    const search = new RegExp(text, 'i')
    const task = await Task.find({
        $or: [{ title: search }, { description: search }]
    })
    if (task.length === 0) {
        console.log("No task found")
        await connection.close();
        process.exit(0)
    }
    console.table({
        id: task[0]._id.toString(),
        title: task[0].title,
        description: task[0].description
    });
    await connection.close();
    process.exit(0)
}

module.exports = {
    addTask,
    listTask,
    deleteTask,
    updateTask,
    findTask
}
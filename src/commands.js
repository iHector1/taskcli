const { program } = require('commander')
const { prompt } = require('inquirer')
const { addTask, listTask, deleteTask, updateTask, findTask } = require('./controllers/task.controllers')
const questions = [
    {
        type: 'input',
        message: 'Task title',
        name: 'title'
    }, {
        type: 'input',
        message: 'Task description',
        name: 'description'
    }
]

program.version("0.0.1").description("A comanmd line tool for task");

program.command('save').alias('s').action(async () => {
    const answers = await prompt(questions)
    addTask(answers)
})
program.command('list').alias('l').action(() => {
    listTask()
})

program.command('delete <id>').alias('d').action((id) => {
    deleteTask(id)
})
program.command('update <id>').alias("u").action(async (id) => {
    const answers = await prompt(questions)
    updateTask(id, answers)
})
program.command('find <text>').alias('f').action((text) => {
    findTask(text)
})
program.parse(process.argv)

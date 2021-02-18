
class ToDo {
    constructor(tasks) {
        this.tasks = tasks || []
        this.container = null
        this.loadTasks()
    }
    loadTasks() {
        const newTasks = localStorage.getItem('todo')
        this.tasks = JSON.parse(newTasks)
    }
    setTasks(newTasks) {
        this.tasks = newTasks
        localStorage.setItem('todo', JSON.stringify(newTasks))
        this.render()
    }
    deleteTask(index) {
        const newTasks = (this.tasks.filter(task => task.id !== index))
        this.setTasks(newTasks)
        
    }
    addTask(text) {
        const task = {
            id: Date.now(),
            text: text,
            done: false,
        }
        const newTasks = [...this.tasks, task]
        this.setTasks(newTasks)
    }
    toggleDone(id) {
        const newTasks = this.tasks.map(task => {
            if(task.id !== id) return task
            return {
                ...task, done: !task.done
            }
        })
        this.setTasks(newTasks)
    }
    renderTask() {
        this.tasks.forEach((taskData) => {
            const task = new Task(taskData,
                () => this.toggleDone(taskData.id),
                () => this.deleteTask(taskData.id),
            )
            this.container.appendChild(task.render())
        })        
    }
    render() {
        if(this.container === null) {
            this.container = document.createElement('div')
        }
        this.container.innerHTML = ''

        const form = new Form('', val => this.addTask(val))
        this.container.appendChild(form.render())

        this.renderTask()

        return this.container
    }
}










































































































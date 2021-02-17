
class ToDo {
    constructor(tasks) {
        this.tasks = tasks || []
        this.container = null
    }
    deleteTask(index) {
        this.tasks = this.tasks.filter(task => task.id !== index)
        this.render()
    }
    addTask(text) {
        const task = {
            id: Date.now(),
            text: text,
            done: false,
        }
        this.tasks = [...this.tasks, task]
        this.render()
    }
    toggleDone(id) {
        this.tasks = this.tasks.map(task => {
            if(task.id !== id) return task
            return {
                ...task, done: !task.done
            }
        })
        this.render()
    }
    renderTask() {
        this.tasks.forEach((taskData) => {
            const task = new Task(taskData,
                () => this.toggleDone(taskData.id),
                // () => console.log('Done'),
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
        // const form = new Form('', val => console.log(val))
        this.container.appendChild(form.render())

        this.renderTask()

        return this.container
    }
}










































































































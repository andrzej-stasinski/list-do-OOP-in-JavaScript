
class ToDo {
    constructor(tasks) {
        this.tasks = tasks || []
    }
    deleteTask(index) {
        this.tasks = this.tasks.filter(task => task.id !== index)
    }
    renderTask(container) {
        this.tasks.forEach((taskData) => {
            const task = new Task(taskData,
                () => console.log('Done'),
                () => console.log('Delete'),
            )
            container.appendChild(task.render())
        })        
    }
    render() {
        const container = document.createElement('div')

        const form = new Form('', val => console.log(val))
        container.appendChild(form.render())

        this.renderTask(container)

        return container
    }
}











































































































class Task {
    constructor(task, onDone, onDelete) {
        this.task = task
        this.onDone = onDone
        this.onDelete = onDelete
    }
    render() {
        const container = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = this.task.task

        const buttonDone = new Button('Done', this.onDone)
        const buttonDelete = new Button('Delete', this.onDelete)
        
        container.appendChild(p)
        if(this.task.done) {
            p.classList.add('task-done')
        }

        const buttons = document.createElement('div')
        buttons.appendChild(buttonDone.render())
        buttons.appendChild(buttonDelete.render())

        container.appendChild(buttons)
        container.classList.add('containerTask')
        return container        
    }
}











































































































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

        // button - done & delete
        const buttonDone = new Button('Done', this.onDone)
        let buttonDelete = new Button('Delete', this.onDelete)
        
        // task
        container.appendChild(p)
        if(this.task.done) {
            p.classList.add('task-done')
        }

        // buttons
        const buttons = document.createElement('div')
        buttonDelete = buttonDelete.render()
        buttonDelete.classList.add('btn-delete')
        buttons.appendChild(buttonDone.render())
        buttons.appendChild(buttonDelete)

        container.appendChild(buttons)
        container.classList.add('containerTask')
        return container        
    }
}










































































































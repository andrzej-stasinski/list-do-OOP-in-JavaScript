
class Task {
    constructor(task, onDone, onDelete) {
        this.task = task
        this.onDone = onDone
        this.onDelete = onDelete
    }
    render() {
        const container = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = this.task.text

        // button - done 
        let buttonDone = new Button('Done', this.onDone)
        if(this.task.done) {
            buttonDone = new Button('Done', this.onDone)
        } else {
            buttonDone = new Button('Not Done', this.onDone)
        }
        // button - delete
        let buttonDelete = new Button('Delete', this.onDelete)
        
        // task
        if(this.task.done) {
            p.classList.add('task-done')
        } else {
            p.classList.remove('task-done')
        }
        container.appendChild(p)

        // buttons
        const buttons = document.createElement('div')
            buttonDone = buttonDone.render()
            this.task.done ? buttonDone.classList.add('btn-done') : buttonDone.classList.add('btn-none-done')
            buttonDelete = buttonDelete.render()
            buttonDelete.classList.add('btn-delete')
        buttons.appendChild(buttonDone)
        buttons.appendChild(buttonDelete)

        // const buttons = document.createElement('div')
        // buttonDelete = buttonDelete.render()
        // buttonDelete.classList.add('btn-delete')
        // buttons.appendChild(buttonDone.render())
        // buttons.appendChild(buttonDelete)

        container.appendChild(buttons)
        container.classList.add('containerTask')
        return container        
    }
}











































































































class Form {
    constructor(initial, onSubmit) {
        this.initial = initial
        this.onSubmit = onSubmit
        this.val = initial
    }
    render() {
        const form = document.createElement('form')
        const input1 = new Input('', val => this.val = val)
        const button1 = new Button('Add task')

        form.addEventListener('submit', e => {
            e.preventDefault()
            this.onSubmit(this.val)
        })

        form.appendChild(input1.render())
        form.appendChild(button1.render())
        return form
    }
}










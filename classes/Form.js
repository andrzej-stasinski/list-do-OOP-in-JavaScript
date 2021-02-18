
class Form {
    constructor(initial, onSubmit) {
        this.initial = initial
        this.onSubmit = onSubmit
        this.val = initial
    }
    render() {
        const form = document.createElement('form')



        const input1 = new Input('', val => {
            // console.log(val)
            return this.val = val
        })
        const button1 = new Button('Add task')

        // input render
        const inputRendered = input1.render()

        // form 
        form.addEventListener('submit', e => {
            e.preventDefault()
            if(this.val.length > 0 && this.val.length < 10) {
                this.onSubmit(this.val)
                inputRendered.classList.remove('input-error')
            } else {
                inputRendered.classList.add('input-error')
            }
                
        })

        form.appendChild(inputRendered)
        form.appendChild(button1.render())
        return form
    }
}










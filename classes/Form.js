
class Form {
    constructor(initial, onSubmit) {
        this.initial = initial
        this.onSubmit = onSubmit
        this.val = initial
    }
    render() {
        const form = document.createElement('form')

        const counter = document.createElement('div')
        counter.textContent = '0'
        counter.classList.add('counter')
        form.appendChild(counter)

        const maxChar = 40
        const input1 = new Input('', val => {
            // console.log(val)
            counter.textContent = this.val.length + 1
            if(this.val.length + 1 >= maxChar) {
                counter.textContent = 'max'
                console.log(val)
            }
            return this.val = val
        })
        const button1 = new Button('Add task')

        // input render
        const inputRendered = input1.render()

        // form 
        form.addEventListener('submit', e => {
            e.preventDefault()
            if(this.val.length > 0 && this.val.length <= maxChar) {
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










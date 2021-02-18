
class Input {
    constructor(text, onChange) {
        this.text = text
        this.onChange = onChange
    }
    render() {
        const input = document.createElement('input')
        input.value = this.text
        const maxChar = 40
        input.setAttribute('maxlength', maxChar)
        input.addEventListener('input', e => {
            input.classList.remove('input-error')
            this.onChange(e.target.value, e.target.value.length)
        })
        input.classList.add('input')
        return input        
    }
}










































































































class Input {
    constructor(text, onChange) {
        this.text = text
        this.onChange = onChange
    }
    render() {
        const input = document.createElement('input')
        input.value = this.text
        input.addEventListener('input', e => {
            input.classList.remove('input-error')
            this.onChange(e.target.value)
        })
        input.classList.add('input')
        return input        
    }
}









































































































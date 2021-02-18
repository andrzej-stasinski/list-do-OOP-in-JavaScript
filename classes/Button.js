
class Button {
    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }
    render() {
        const button = document.createElement('button')
        button.textContent = this.label
        if(this.onClick) {
            button.addEventListener('click', () => this.onClick())
        }

        button.classList.add('button')
        
        return button
    }
}















































































































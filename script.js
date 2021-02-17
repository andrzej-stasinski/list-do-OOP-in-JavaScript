
        // const input1 = new Input('Text', (val) => console.log(val))
        // const button1 = new Button('Add', () => console.log('click'))

        const form = new Form('', val => console.log(val))

        const task1 = new Task(
            {'task': 'clean up the room', done: true},
            () => console.log('Done'),
            () => console.log('Delete'),
        )
        const task2 = new Task(
            {'task': 'sweep the floor', done: false},
            () => console.log('Done'),
            () => console.log('Delete'),
        )

        const container = document.querySelector('.container')
        // container.appendChild(input1.render())
        // container.appendChild(button1.render())

        container.appendChild(form.render())

        container.appendChild(task1.render())
        container.appendChild(task2.render())






























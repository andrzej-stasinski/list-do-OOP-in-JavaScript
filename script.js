
        // const form = new Form('', val => console.log(val))

        // const task1 = new Task(
        //     {'task': 'clean up the room', done: true},
        //     () => console.log('Done'),
        //     () => console.log('Delete'),
        // )
        // const task2 = new Task(
        //     {'task': 'sweep the floor', done: false},
        //     () => console.log('Done'),
        //     () => console.log('Delete'),
        // )

        // const container = document.querySelector('.container')

        // container.appendChild(form.render())
        // container.appendChild(task1.render())
        // container.appendChild(task2.render())

    const todo1 = new ToDo([
        {id: 1, text: 'clean up the room', done: false},
        {id: 2, text: 'sweep the floor', done: true}
    ])

    console.log(todo1)

    const container = document.querySelector('.container')
    container.appendChild(todo1.render())



























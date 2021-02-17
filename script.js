
    const todo1 = new ToDo([
        {id: 1, text: 'clean up the room', done: false},
        {id: 2, text: 'sweep the floor', done: true}
    ])

    console.log(todo1)

    const container = document.querySelector('.container')
    container.appendChild(todo1.render())



























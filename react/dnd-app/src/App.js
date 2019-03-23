import React, { Component } from 'react'

import './App.css'

class App extends Component {
  state = {
    complete: [
      { name: 'Learn React', bgColor: 'pink' },
      { name: 'Learn Next.js', bgColor: 'yellow' }
    ],
    wip: [
      { name: 'Learn Vue', bgColor: 'skyblue' },
      { name: 'Learn Văn hóa kinh doanh', bgColor: 'violet' }
    ]
  }

  renderTasks = (tasks, from) => tasks.map(task => (
    <div
      className="task-item draggable"
      key={task.name}
      style={{ backgroundColor: task.bgColor }}
      draggable
      onDragStart={event => this.handleDragStart(event, task.name, from)}
    >
      {task.name}
    </div>
  ))

  handleDragStart = (event, taskName, from) => {
    console.log('drag-start')
    event.dataTransfer.setData('taskName', taskName)
    event.dataTransfer.setData('from', from)
  }

  handleDragOver = event => {
    event.preventDefault()
  }

  handleDrop = (event, category) => {
    console.log('drop')
    const taskName = event.dataTransfer.getData('taskName')
    const from = event.dataTransfer.getData('from')
    const tasks = this.state

    const taskIndex = tasks[from].findIndex(task => task.name === taskName)
    let desTasks = tasks[category].slice()
    desTasks.push(tasks[from][taskIndex])
    let srcTasks = tasks[from].slice()
    srcTasks.splice(taskIndex, 1)

    this.setState({
      ...this.state,
      [from]: srcTasks,
      [category]: desTasks
    })
  }

  render() {
    const { wip, complete } = this.state

    return (
      <div>
        <nav className="navbar">
          Drag and drop DEMO
        </nav>

        <div className="container">
          <div className="task-container">
            <div
              onDragOver={event => this.handleDragOver(event)}
              onDrop={event => this.handleDrop(event, 'wip')}
              className="task-list"
            >
              <h6 className="task-list-title">
                WIP
              </h6>
              {this.renderTasks(wip, 'wip')}
            </div>

            <div
              className="task-list"
              onDragOver={event => this.handleDragOver(event)}
              onDrop={event => this.handleDrop(event, 'complete')}
            >
              <h6 className="task-list-title">
                Complete
              </h6>
              {this.renderTasks(complete, 'complete')}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

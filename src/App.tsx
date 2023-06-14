import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { useState } from 'react'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function AddTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  return (
    <div>
      <Header onAddTask={AddTask} />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App

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
    taskTitle &&
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          title: taskTitle,
          isCompleted: false
        }
      ])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
    console.log('fui clicado')
  }

  return (
    <div>
      <Header onAddTask={AddTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} />
    </div>
  )
}

export default App

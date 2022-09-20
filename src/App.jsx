import './App.css'
import { useState } from 'react'
import { TaskList } from './components/TaskList'
import { FormTask } from './components/FormTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormTask />
      <TaskList />
    </div>
  )
}

export default App

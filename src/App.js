//npm run server
import { useState } from "react"

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'ML course',
      day: 'Feb 5th at 3:00pm',
      reminder: true
    },
    {
      id: 2,
      text: 'CP sessions',
      day: 'Sept 13th at 3:00pm',
      reminder: true
    },
    {
      id: 3,
      text: 'DBMS exam',
      day: 'Sept 14th at 3:00pm',
      reminder: false
    }
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!==id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task)=>
      task.id===id? {...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          ) : (
        'No tasks to show'
      )}
    </div>
  );
}


export default App;

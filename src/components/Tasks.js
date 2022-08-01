//List of tasks component

import Task from './Task'

//tasks is being passed in from the useState in App.js
const Tasks = ({ tasks, onDelete, onToggle }) => {

  return (
    <div className="list-group">
    {/* iterates through array of task objects and renders a task component for each task */}
    {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
    ))}
    </div>
  )
}

export default Tasks
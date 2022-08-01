//Individual task components for the list of tasks

//import icon from react-icons package's fontawesome collection
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`list-group-item p-4 ${task.reminder ? 'bg-success text-white' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3 className="d-flex justify-content-between">{task.text}
        <FaTimes 
        onClick={() => onDelete(task.id)} 
        style={{ color: 'red',
        cursor: 'pointer'}}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
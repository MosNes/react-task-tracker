//Individual task components for the list of tasks

//import icon from react-icons package's fontawesome collection
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div className="list-group-item p-4">
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
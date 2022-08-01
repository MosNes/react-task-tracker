//root component, inserted into the div with the id of root in the index.html file
import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState([

    {
        id: 1,
        text: 'Wake Up',
        day: 'Feb 5th at 9:00am',
        reminder: false
    },
    {
        id: 2,
        text: 'Eat Borgar',
        day: 'Feb 5th at 12:00pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Punch Badguys',
        day: 'Feb 5th at 12:30pm',
        reminder: false
    },
]);

//---------------FUNCTIONS THAT INTERACT WITH THE STATE-------------------------------
//these can be passed to components as props

// Delete task
const deleteTask = (id) => {
  //loops through existing array of tasks in the state and returns all but the selected id
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  console.log('Reminder', id);
}

  return (
    <div className='container'>
      {/* header component from compontents/header.js */}
      <Header />
      {tasks.length > 0 ? <Tasks tasks= {tasks} onDelete={deleteTask} /> : 'No Tasks'}
    </div>
  );
}

export default App;

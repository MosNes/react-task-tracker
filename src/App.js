//root component, inserted into the div with the id of root in the index.html file
import { useState } from 'react';

//---------------COMPONENTS TO IMPORT----------------------------------------------------------
//components should be the direct child components of this component
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


//---------------REACT APP COMPONENT----------------------------------------------------------------
function App() {
  //state containing mock data
  //first arg is name of state array, second arg is name of function used to update state
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
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //--------------RENDERS THE PAGE----------------------------------------------
  return (
    <div className='container'>
      {/* header component from compontents/header.js */}
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;

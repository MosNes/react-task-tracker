const AddTask = () => {
    return (
        <form className='mb-4'>
            <div className="form-group mb-3">
                <label htmlFor="add-task-input">Task</label>
                <input className="form-control" type="text" placeholder='Add task' id='add-task-input' />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="date-input">Day & time</label>
                <input className="form-control" type="text" placeholder='Add Day & Time' id='date-input' />
            </div>
            <div className="form-group form-check mb-3">
                <label className='form-check-label' htmlFor="reminder-check">Set Reminder</label>
                <input className="form-check-input" type="checkbox" id='reminder-check' />
            </div>
            {/* use d-grid to get button to span the entire width of parent */}
            <div className="d-grid">
                <input className="btn btn-success" type="submit" value='Save Task'/>
            </div>
        </form>
    )
}

export default AddTask
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    //define functions for props inside
    const onClick = () => {
        console.log('Click')
    }

  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
    </header>
  )
}

//sets up a default value for props if other values aren't passed in
Header.defaultProps = {
    title: 'Task Tracker'
}

//uses PropTypes to specify types for each of the props used by the component
//not needed but helps prevents errors
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS, pass headingStyle into element style property, e.g. style={{headingStyle}} for in-line styling
// const headingStyle = {
//     color: 'black',
//     backgroundColor: 'black'
// }

export default Header
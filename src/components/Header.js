const Header = (props) => {
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}

//sets up a default value for props if other values aren't passed in
Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
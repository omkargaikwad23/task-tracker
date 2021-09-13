// import PropTypes from 'prop-types' //impt
import Button from './Button'
//rafce
const Header = ({title, onAdd, showAdd}) => {
  
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// Header.PropTypes = {
//   title: PropTypes.string.isRequired 
// }

export default Header

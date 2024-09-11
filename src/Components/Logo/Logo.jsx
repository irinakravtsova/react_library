import classNames from 'classnames';
import './Logo.css'
import logo from '../../assets/logo.png'

function Logo(props) {


  return (
    <>
      <img 
      src={logo} 
      alt="logo" 
      className= {classNames('logo', props.cls)}
      width='154'/>
    </>

  )
}

export default Logo
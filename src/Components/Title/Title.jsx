import classNames from 'classnames';
import './Title.css'

function Title2(props) {


  return (
    <>
 <h2
    className= {classNames('subtitle', props.cls)}
    >{props.text}</h2>
    </>

  )
}

export default Title2
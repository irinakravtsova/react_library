import React from 'react';
import classNames from 'classnames';
import './button.css'

function Button(props) {
if (props.btn ==='cardBtn') {
  return ()
}

  return (
    <>
    <button className={classNames("btn defolt-btn", props.cls)}
            type= {props.type}>отправить</button> 
    {/* <a className="btn defolt-btn defolt-btn_link" href=''>отправить</a> */}
    </>

  )
}

export default Button
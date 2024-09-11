import React from 'react';
import classNames from 'classnames';
import './button.css'

function Button(props) {
if (props.btn ==='cardBtn') {
  return (
    <button className={classNames("btn defolt-btn", props.clsCard)}
    type= {props.type}>{props.textCard}</button> 
  )
}
if (props.btn ==='formBtn') {
  return (
    <>
    <button className={classNames("btn defolt-btn", props.clsForm)}
            type= {props.type}>{props.textForm}</button> 
    {/* <a className="btn defolt-btn defolt-btn_link" href=''>отправить</a> */}
    </>

  )
}
}

export default Button
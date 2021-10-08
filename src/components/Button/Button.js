import React from "react";
import PropTypes from 'prop-types'
import style from './styles/button.module.scss';

const Button = ({text,onClick,status})=> (
    <div className={style.Container}>
        <button type="button" onClick={onClick} className={style.Button} disabled={status}>{text}</button>
    </div>

)

Button.propTypes={
    text:PropTypes.string.isRequired,
    status:PropTypes.bool.isRequired
}

export default Button;

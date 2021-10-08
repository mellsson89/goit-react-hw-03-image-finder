import React,{Component} from "react";
import {createPortal} from 'react-dom';
import style from './styles/modal.module.scss'

const modalRoot=document.querySelector('#modal-root')

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeModalEscape);
    }

    componentWillUnmount() {
window.removeEventListener('keydown', this.closeModalEscape)
    }

    closeModalEscape =(e) => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    }

    closeClickModal=(e) => {
        if(e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(<div className={style.Modal__backdrop} onClick={this.closeClickModal}>
            <div className={style.Modal__content}>
                <img src={this.props.imgLarge} alt={this.props.altImg} /></div>
        </div>,modalRoot)
    }
}

export default Modal;

import React from 'react';
import './Modal.css'; 

const Modal = ({ onClose, content }) => {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-header">안녕하세요</div>
                <div className="modal-content">{content}</div>
                <button className="modal-close-button" onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;

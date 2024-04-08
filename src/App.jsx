
import React, { useState } from 'react';
import Modal from './components/Modal.jsx';

const App = () => {
    const [showModal, setShowModal] = useState(false);
    
    const logOpenModal = () => {
        console.log('모달 열림');
        setShowModal(true);
    };

    const logCloseModal = () => {
        console.log('모달 닫힘');
        setShowModal(false);
    };
    
    return (
        <div>
            <h2>안녕하세요!</h2>
            <p>내용내용내용</p>
            <button onClick={() => logOpenModal()}>모달 열기</button>
            {showModal && <Modal content="모달 내용은 어쩌고 저쩌고.." onClose={logCloseModal} />}
        </div>
    );
};

export default App;

import { useEffect,  useRef } from 'react';
import './Modal.css';


function Modal({hide}){

    const modalRef = useRef(null);

    function handleCloseBtn(e){
        if(!modalRef.current.contains(e.target)){
            hide();
        }
    }

    useEffect(()=>{
        if(modalRef.current){
            document.addEventListener('click', handleCloseBtn, true)
        }
        return () => document.removeEventListener('click', handleCloseBtn, true);
    },[modalRef, handleCloseBtn])

    return(
        <>
            <div className='modal'  ref={modalRef} >
                <h2>This is Modal</h2>
                <hr/>
                <p>React — это JavaScript-библиотека для разработки пользовательского интерфейса. </p>
                <button className='btnClose' onClick={hide}>close</button>
                
            </div>
        
        </>
    )
}

export default Modal;




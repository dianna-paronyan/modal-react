import {useState, lazy, Suspense} from 'react';
import './App.css';

const Modal = lazy(() => import('./components/Modal.js'));

function App() {

  const [show, setShow] = useState(false);

  function showModal(){
    setShow(true);
  }

  function hide(){
    setShow(false);
  }


  return (
    <div className="App" >

        <Suspense fallback={<div style={{fontSize:'24px'}}>Loading...</div>}>

          {show ? <Modal hide={hide} /> : ''}

      </Suspense>

        <button className='btnShow' onClick={showModal}>Show Modal</button>
    </div>
  );
}

export default App;

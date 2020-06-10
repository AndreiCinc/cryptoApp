import React, {useState, useContext} from 'react';
import Modal from 'react-modal';
import Context from './context.component';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
export default function App(props){

  const [modalIsOpen, setIsOpen] = useState(false);
  let details = React.useContext(Context);

  function openModal() {
    setIsOpen(true);
  }
  
  function onClose (e) {
    props.onClose && props.onClose(e);
  }

  if (!props.value) {
    return null;
  }
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
       >
 
        <h2>{details.value}</h2>
       
        <div>bam</div>
        <div>Details1</div>
        <div>Details1</div>
        <button onClick={e => {onClose(e);}}>close</button>
      </Modal>
    </div>
  );
}
 
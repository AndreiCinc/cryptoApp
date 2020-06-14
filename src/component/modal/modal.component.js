import React from 'react';
import Modal from 'react-modal';
import NumberFormat from 'react-number-format'; 
 
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
 
export default function SetModal(props) {
  
  function onClose (e) {
    props.onClose && props.onClose(e);
  }
  const marketCapFormat = () => {
    return (
      <NumberFormat   
        value={props.market_cap} 
        displayType={'text'}
        prefix={'$'} 
        thousandSeparator={true} 
      />
    );
  }
  const supplyFormat = () => {
    return (
      <NumberFormat   
        value={props.supply} 
        displayType={'text'}
        prefix={'$'} 
        thousandSeparator={true} 
      />
    );
  }
  if (!props.value) {
    return null;
  }
  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{props.name}</h2>
        <div>Rank: {props.rank}</div>
        <div>Market Cap: {marketCapFormat()}</div>
        <div>Value 1h : {props.percent_1h}</div>
        <div>Value 24h : {props.percent_24h}</div>
        <div>Value 7d : {props.percent_7d}</div>
        <div>Supply : {supplyFormat()}</div>
        <button onClick={e => {onClose(e);}}>close</button>
      </Modal>
    </div>
  );
}
 
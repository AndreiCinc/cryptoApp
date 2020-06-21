import React from 'react';
import Modal from 'react-modal';
import './modal.style.css';
import greenArrowLogo from './greenArrow.img.png';
import redArrowLogo from './redArrow.img.png'; 
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
  
  const arrowPercent1h = () => {
    if (props.percent_1h < 0)  {
      return (
        <img src={redArrowLogo} alt="Logo" width="10" height="17"/>
        );
    }
    return(
      <img src={greenArrowLogo} alt="Logo" width="10" height="17"/>
        );
  }

  const arrowPercent24h = () => {
     if (props.percent_24h < 0)  {
      return (
        <img src={redArrowLogo} alt="Logo" width="10" height="17"/>
        );
    }
    return(
      <img src={greenArrowLogo} alt="Logo" width="10" height="17"/>
        );
  }

   const arrowPercent7d = () => {
     if (props.percent_7d < 0)  {
      return (
        <img src={redArrowLogo} alt="Logo" width="10" height="17"/>
        );
    }
      return(
      <img src={greenArrowLogo} alt="Logo" width="10" height="17"/>
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
      >
       <button className={"closeButton"} onClick={e => {onClose(e)}}>X</button>
        <h2 className={"name"}>{props.name}</h2>
        <p className={"rank"}>Rank: {props.rank}</p>
        <p className={"marketCap"}>Market Cap: {marketCapFormat()}</p>
        <div className={"percent"}>
          <p>Value 1h : {props.percent_1h} {arrowPercent1h()}</p> 
          <p>Value 24h : {props.percent_24h} {arrowPercent24h()} </p>
          <p>Value 7d : {props.percent_7d}  {arrowPercent7d()} </p>
        </div>
        <div className={"supply"}>Supply : {supplyFormat()}</div>
      </Modal>
    </div>
  );
}
 
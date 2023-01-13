import React, { useEffect, useState } from 'react';
import web3Instances from '../shared/Web3';
import '98.css';

const AddressField = ({selectedCrypto}) => {
  
  let [addressInput, setAddressInput] = useState('0x')
    , [addressInfo, setAddressInfo] = useState('');

  useEffect(() => {
    isValidAddress(addressInput);
  });

  const isValidAddress = async (event) => {
    try {
      console.log('Ejecucion');
      // Get the web3 instance for the selected network and correct the address
      let web3Instance = web3Instances[selectedCrypto.shortNetworkName];
      let address = web3Instance.utils.toChecksumAddress(event.target ? event.target.value : event);
      setAddressInput(address);
      
      // Fetch the balance
      let balance = await web3Instance.eth.getBalance(address);
      setAddressInfo(`Balance: ${web3Instance.utils.fromWei(balance, 'ether').toString().substring(0, 4)} ${selectedCrypto.symbol}`)

    } catch (error) {
      // Set the change and set 
      setAddressInput(event.target ? event.target.value : event);
      setAddressInfo('Invalid address');
    }
  }
  
  return (
    <div className='address-container'>
      <fieldset>
        <legend>Paste the address in {selectedCrypto.network}:</legend>
        <div className='address-checker'>
          <input className='address-input' type='text' value={addressInput} onChange={isValidAddress} />
          <label>{addressInfo}</label>
        </div>
      </fieldset>
    </div>
  );
}

export default AddressField;
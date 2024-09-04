import React, { useState } from "react";
import QRCode from "react-qr-code";

const GenerateQRCode = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleOnChange = (event)=>{
    setInput(event.target.value)
  }
  const handleOnClick = ()=>{
    setQrCode(input)
    setInput("")

}
  console.log(input)
  return (
    <div>
      <h1>Generate QR Code</h1>
      <input type="text" placeholder="Enter value here" name="qr-code" onChange={(event)=>handleOnChange(event)} value={input}/>
      <button disabled={input === "" ? true:false} onClick={handleOnClick}>Generate</button>
      <div>
      <QRCode id="qrCode" value={qrCode}/>
      </div>
    </div>
  );
};

export default GenerateQRCode;

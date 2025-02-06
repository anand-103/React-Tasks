import React, { useState } from 'react'
import './Qrcoder.css';

const Qrcoder = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");
    const [qrSize, setQrSize] = useState("");

    async function generateQR() {
        setLoading(true);
        try{
            const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(data)}`
            setImg(url);
        }catch(error) {
            console.error(error);
        }finally{
        setLoading(false)
        }
    }

    function downloadQR(){
        fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
    }
  return (
    <>
      <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {img && <img src={img} alt="image" className='qr-image' />}
        {loading && <p>Please wait...</p>}
        <div>
        <label htmlFor="url" className='input-label'>Data for QR Code : </label>
        <input type="text" id="url" value={data} placeholder='Enter data for QR code' onChange={(e)=>setData(e.target.value)} />
        <label htmlFor="size" className='input-label'>Image size (e.g, 150) : </label>
        <input type="text" id='size' value={qrSize} placeholder='Enter image size' onChange={(e)=>setQrSize(e.target.value)} />
        <button className='generate-button' disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className='download-button' onClick={downloadQR}>Downlode QR Code</button>
        </div>
        <p className='footer'>Designed by <a href="#">Anand 👋</a></p>
      </div>
      </>
  )
}

export default Qrcoder

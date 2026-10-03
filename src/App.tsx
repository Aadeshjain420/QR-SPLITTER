import { useState } from 'react'
import QRCode from 'qrcode'

export default function App(){
  const [text,setText] = useState('')
  const [qr,setQr] = useState('')
  const make = async () => {
    const url = await QRCode.toDataURL(text || 'QR-Splitter')
    setQr(url)
  }
  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h2>QR SPLITTER</h2>
      <input style={{width:'100%',padding:12,border:'1px solid #ccc',borderRadius:8}} placeholder="Yaha text likho" value={text} onChange={e=>setText(e.target.value)} />
      <button style={{marginTop:12,padding:12,width:'100%',background:'black',color:'white',borderRadius:8}} onClick={make}>QR Banao</button>
      {qr && <img src={qr} style={{marginTop:20,width:250}} />}
    </div>
  )
}

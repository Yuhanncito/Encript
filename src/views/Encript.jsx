import CryptoJs from 'crypto-js'
import { useState } from 'react'
function Encript() {
    const [message, setmessage] = useState("")
    const [message1,setMessage1] = useState("")

    const encrypy = () =>{
        let messages = CryptoJs.AES.encrypt(message,"Yuhancito").toString();
        setMessage1(messages);
    }
    const dencrypy = () =>{
        let messages = CryptoJs.AES.decrypt(message,"Yuhancito");
        let textoDescifrado = messages.toString(CryptoJs.enc.Utf8);
        setMessage1(textoDescifrado);
    }
    
    const handle = (e) =>{
        setmessage(e.target.value);
    }
    return (
    <div class="container2">
    <div class="actions-encrypt shadow p-3 mb-5 bg-white rounded">
        <h1 class="hovercito">Cifrado de Palabras</h1>
        <div class="container">
            <div class="form-floating">
                <input type="text" name="texto" id="texto" class="form-control" onChange={handle}/>
                <label for="texto">Texto plano</label>    
            </div>
            <button id="btn" class="btn btn-danger" onClick={encrypy}>bcrypt</button>
        </div>
        <div class="container">
            <div class="form-floating">
                <input type="text" name="texto3" id="texto2" class="form-control" onChange={handle}/>
                <label for="texto3">Texto Encriptado</label>  
            </div>
            <button id="btn2" class="btn btn-success" onClick={dencrypy}>dcrypt</button>
        </div>
    </div>
    <div class="view-encrypt shadow p-3 mb-5 bg-white rounded">
        <div class="container"><h1 class="hovercito2">Texto Plano/Cifrado</h1></div>
        <div class="container">
            <h1 id="texto1" style={{fontSize:"20px"}}>{message1}</h1>
        </div>
    </div>
</div>
  )
}

export default Encript
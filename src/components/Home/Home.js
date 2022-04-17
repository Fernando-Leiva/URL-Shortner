import React from "react";
import { sendUrl } from "../../helper/utils";
import './Style.css'


export const Home = () => {
    const [urlValue,setUrlValue] = React.useState('')
    const [url, setUrl] = React.useState('')
    const [validation,setValidation] = React.useState('')
    
    const handleSecret = async (e) => {
        e.preventDefault()
        if(urlValue){
            const receivedSecret = await sendUrl(urlValue)
            if(receivedSecret){
                setUrl(receivedSecret.converted)
                window.localStorage.setItem('shortnerUrl',receivedSecret.converted)
            }
            setUrlValue('')
            setValidation('')
        }else{
            setValidation('Ingrese una URL!')
        }
    }
    const handleExample = (e) => {
        e.preventDefault()
        sendUrl('')
        const exampleUrl = "https://www.youtube.com/watch?v=Z-48u_uWMHY"
        setUrlValue(exampleUrl)
    }
    return(
        <div className="containerHome">
           {/*  <img src={secretImg} alt="Avatar" className="img"/> */}
           <h1>URL Shortener</h1>
            {validation && <h1>{validation}</h1>}
            <input placeholder="Ingrese el enlace" value={urlValue} onChange={e=>setUrlValue(e.target.value)}/>
            {url &&
                <section>
                    <span>Se genero el enlace acortado para su url original.</span>
                    <a href={url} className="link" >{url}</a>
                </section>       
            }
            <button onClick={handleSecret} >Generar enlance</button>
            <button onClick={handleExample} >URL de ejemplo</button>
        </div>
    )
}
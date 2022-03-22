import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter text here')

    const handleupclick = ()=>
    {
        let newtext = text.toUpperCase();
        setText(newtext);
    }


    const lowercase = ()=>
    {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    
    const onchang = (event) =>
    {
     console.log("onchang");
        setText(event.target.value);
    }
    
    return (
        <>
        <div className='container'>
            <div >
                 <h2 style={{color:props.mode === 'dark' ? 'white':'black'}}>{props.heading}</h2>
                  <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'grey':'white',color:props.mode === 'dark' ? 'white':'black'}}  onChange={onchang} value={text} rows="8"></textarea>
            
                  <button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>UPPERCASE</button>
        
                  <button className="btn btn-primary " onClick={lowercase}>LOWERCASE</button>
            </div>
        </div>
        <div className="container my-5" style={{color:props.mode === 'dark' ? 'white':'black'}}>
            <h1>Your Text summery</h1>
            <p>{text.split(" ").length}words and {text.length} characters</p>
        </div>
        </>
    )  
}

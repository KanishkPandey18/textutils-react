import React,{useState} from 'react'



export default function TextForm(props) {
    const onsenclick =()=> {
    if (!text) {
    return ""; // Handle empty or null strings
    }
    const lowercasedStr = text.toLowerCase();
    const firstChar = lowercasedStr.charAt(0).toUpperCase();
    const restOfString = lowercasedStr.slice(1);
    const final = firstChar + restOfString;
    setText(final)
    props.showAlert("success","Converted to Sentancecase")
}
    const onUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("success","Converted To UpperCase");
    }
    const onlowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","Converted To lowercase")
    }
    const onclearclick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("success","Text Cleared")
    }
    const extraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success","Extra Space Cleared")
    }
    const copyText = ()=>{
        let newText = document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("success","Text Copied")
    }
    const onChange = (event) => {
        setText(event.target.value); 
    }
    const[text,setText]=useState('Enter Text here')
    return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control`} style={{backgroundColor: props.mode==='dark' ? 'rgb(37 74 104)':'white',color: props.mode==='dark' ? 'white':'black'}} id="exampleFormControlTextarea1"  onChange={onChange} rows="8" value={text}></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={onUpclick}>UPPERCASE</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={onlowclick}>lowercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={onsenclick}>Sentance case</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={onclearclick}>Clear Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={extraSpace}>Remove Extra Space</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
    </div>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter text above to preview it here"}</p>
    </div>
    </>
    
    )
}


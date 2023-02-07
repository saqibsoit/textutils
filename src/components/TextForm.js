import React, {useState} from 'react'

export default function TextForm(props) {
    const handelUpClick = ()=>{
      let  newText = text.toUpperCase();
        setText(newText)
    }

    const handelLoClick = ()=>{
      let  newText = text.toLowerCase();
        setText(newText)
    }

    const handelOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter Your Text Here");

    return(
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handelUpClick}>Convert to Uppercase </button>
            <button className='btn btn-primary mx-2' onClick={handelLoClick}>Convert to Lowercase </button>

        </div>
        <div className='container my-3'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Word and {text.length} Characters </p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

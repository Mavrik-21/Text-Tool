import React, { useState } from "react";

export default function Textform(props) {

    const [text, setText] = useState('');

    const handleOnClick = () => {
        console.log("Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("You have converted to Upper Case.","success");
    }

    const handleLoClick = () => {
        console.log("Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("You have converted to Lower Case.","success");

    }

    const handleCopy = () => {
        console.log("Copy");
        let newText = document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied","success");

    }

    const handleExtraSpace = () => {
        console.log("Clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces.","success");

    }

    const handleClClick = () => {
        console.log("Clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Cleared all text.","success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


  return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#343a40'}}>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#343a40'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2"  onClick={handleOnClick}>UpperCase</button>
            <button className="btn btn-primary mx-2"  onClick={handleLoClick}>LowerCase</button>
            <button className="btn btn-primary mx-2"  onClick={handleClClick}>Clear</button>
            <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2"  onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-4"style={{color:props.mode==='dark'?'white':'#343a40'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>This content will take {text.split(" ").length * 0.008} minutes to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in the above text box area to preview here."}</p>
        </div>
    </>
  );
}

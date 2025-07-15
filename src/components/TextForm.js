import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("Upperclick was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")
  };
  const handleLoClick = () => {
    //  console.log("Upperclick was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }
  const handleReverseClick = () => {
  let newText = text.split("").reverse().join("");
  setText(newText);
};

  const handleOnchange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
         Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word !== "").length} Minutes
          read
        </p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}

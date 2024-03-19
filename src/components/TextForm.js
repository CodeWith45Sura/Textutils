import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success");
  };
  const handleLowClick = () => {
    //console.log("Lowerercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared All","success");
  };

  const handleOnChange = (event) => {
    //console.log("on clicked")
    setText(event.target.value);

  };
  const [text, setText] = useState("");

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  //  document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard","success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'#14314a':'white' ,color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>

        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear All
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3"style={{color:props.mode==='dark'?'white':'black' }} >
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(/\S+/).filter((element)=>{return element.length!==0}).length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}

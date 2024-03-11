import React, {useState}from 'react'

export default function TextForm(props){
    
    //convert to  uppercase function
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
   //convert lower case function
    const handleLowerClick = ()=>{
        // console.log("convert on Lower Case"+ taxt);
        let newText = text.toLowerCase();
        setText(newText);
    }
    //clear the text board function
    const handleClearClick = ()=>{
        // console.log("convert on Lower Case"+ taxt);
        let newText = "";
        setText(newText);
    }

     //Reset text board function
     const handleResetClick = ()=>{
        // console.log("convert on Lower Case"+ taxt);
        let newText = 'Enter text here';
        setText(newText);
    }

    //change on click the button function
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');  

    return (
        
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            {/* search field */}
            {/* <div className="mb-3">
            <label htmlFor="searchField" className="form-label">Email address</label>
            <input type="email" className="form-control" id="searchField" placeholder="name@example.com"/>
            </div> */}

            <h2>{props.heading}</h2>
            
            {/* Add a form field */}
            <div className="mb-3">

            {/* <label htmlFor="textBox" className="form-label">Example Textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
  
           {/* Add a button */}
            <div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                {/* mx and span using for space */}
                {/* <span style={{ margin: '0 10px' }}></span>*/}
                 {/* This creates space between the buttons  */}
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                {/* clear Text button */}
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear-Text</button>

                <button className="btn btn-primary mx-2" onClick={handleResetClick}>Reset-Text</button>
            </div>

            <div className="container my-3"> {/* my-3 is using for upper spacing */}
                <h2> Your Text Summary</h2>
                {/* check words and length in the text */}
                <p><b>{text.split(" ").length} </b>words and <b>{text.length}</b> characters</p>
                {/* tead time number of words */}
                <p><b>{0.008*text.split(" ").length}</b> Minutes read in time</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview it"}</p>
                <hr/><hr/>
            </div>


        </div>
        </>
    )
}

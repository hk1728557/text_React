// import React, { useState } from 'react'

// function for light mode and dark mode
export default function About(props) {

    // const [myStyle, setMyStyle] = useState( {
    //     color:'white',
    //     backgroundColor:'black'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'#042743':'white',
        // border: '2px solid',
        borderColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    }

    // const [btntext, setbtntext] = useState("Enable Light Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white',
    //             border:'1px solid white'
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtntext("Enable Light Mode")
    //     }
    // }
   
    // code for jsx
  return (
    <div className='container' style={{  color: props.mode === 'dark'?'white':'#042743'}} >
        <h2 className='my-3'>About Us</h2>
        <hr/>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={myStyle} >
                <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse"    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            <strong>Analyze Your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            Textitils gives you a way to the analyze your text quickly and efficiently. Be it word count, character count or 
        </div>
        </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Textutils is a free character counter tool that provides instant character count & word count statistics for a given
                text. TextUtils reports the numbers the number of words and characters. Thus it is suitable for writing text with word/ characterlinit.
            </div>
        </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            <strong>Browser Compattible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse"        data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. it 
                suits to count characters in facebook, blog, books, excel document, essays, etc.
            </div>
        </div>
    </div>
    </div>

    {/* <div className='container  my-3'>
         <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
    </div> */}
    
    </div>
  )
}

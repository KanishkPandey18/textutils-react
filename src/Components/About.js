import React,{useState}from "react";

export default function About(props) {
    let myStyle = {
        color :props.mode==='dark' ? 'white': 'black',
        backgroundColor : props.mode==='dark' ? 'rgb(37 74 104)' : 'white'
    }
    return (
    <div className={`container text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor : props.mode==='dark' ? '#042743' : 'white' }}>
    <div className="accordion" id="accordionExample">
        <h2>About Us</h2>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button
                className={`accordion-button text-${props.mode==='light'?'dark':'light'} `}style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                Accordion Item #1
            </button>
            </h2>
            <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
            >
            <div className={`accordion-body text-${props.mode==='light'?'dark':'light'} `}style={myStyle}>
                <strong>This is the first item’s accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It’s also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'} `}style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                >
                Accordion Item #2
                </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                style={myStyle}
            >
                <div className={`accordion-body text-${props.mode==='light'?'dark':'light'} `}style={myStyle}>
                <strong>This is the second item’s accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It’s also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'} `}style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                >
                Accordion Item #3
                </button>
            </h2>
            <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                style={myStyle}
            >
                <div className={`accordion-body text-${props.mode==='light'?'dark':'light'} `}style={myStyle}>
                <strong>This is the third item’s accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It’s also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>,
                though the transition does limit overflow.
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

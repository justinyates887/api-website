import React from "react";

function handleButton(props){
    //Button array should be formatted as and array of strings: [link, text, className]
    if(!props.button){
        return
    } else {
        console.log(props.button[0])
        return (
            <a className={props.button[2]} href={props.button[0]}>{props.button[1]}</a>
        )
    }
}

export function InfoCard(props){
    return(
        <>
            <div className="col-md-4">
                <div className={`card text-center ${props.background}`}>
                    <div className="card-content">
                        <div className="center" dangerouslySetInnerHTML={{__html: props.icon}}></div>
                        <br />
                        <h5 className="card-title">{props.title}</h5>
                        <p>{props.text}</p>
                        {
                            handleButton(props)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
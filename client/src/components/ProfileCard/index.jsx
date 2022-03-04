import React from "react";

/*
Props:
imgSrc
name
text
isVisable
*/

export function ProfileCard(props){
    return(
        <>
            <div className="card center" style={{minWidth: '50%'}}>
                <div className={props.isVisible ? "row d-flex justify-content-center fade-in appear" : "row d-flex justify-content-center fade-in"}>
                    <div className="row m-0 p-0 justify-content-start align-items-center"> 
                        <div className="col-2">
                        <img className="profile-pic" src={props.imgSrc} alt=""/>
                        </div>
                        <div className="col-6">
                        <h3 className="mb-0 font-weight-normal">{props.name}</h3> 
                        </div>
                    </div>
                    <div className="row px-3"> 
                    <p className="text-muted mt-4 mb-3">
                        {props.text}
                    </p> 
                    </div>
                </div>
            </div>
        </>
    )
}
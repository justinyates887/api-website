import React from "react";

export function ResourceCard(props) {
    return (
        <>
           <div class="card resource-card" style={{width: '18rem'}}>
                <a href={props.link}
                        target="_blank">
                        <img src={props.image} class="card-img-top" alt="" />
                        <div class="card-body">
                            <p class="card-text">{props.text}</p>
                        </div>
                </a>
            </div>
        </>
    )
}
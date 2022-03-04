import React from "react";

export function SubPageNav({ Props }){
    return(
        <>
        <div className="container text-center" style={{marginTop: '7rem'}}>
            <h1>Resources</h1>
            <nav class="nav nav-tabs position-absolute start-50 translate-middle mt-4">
                <a href="/resources/equipment" className="nav-item nav-link">Equipment</a>
                <a href="/resources/stoneandtile" className="nav-item nav-link">Stone & Tile</a>
                <a href="#" className="nav-item nav-link">Extras</a>
                <a href="#" className="nav-item nav-link" tabindex="-1">Reports</a>
            </nav>
        </div>
        </>
    )
}
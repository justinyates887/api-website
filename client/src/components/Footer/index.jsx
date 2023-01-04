import React from "react";

export function Footer (props){
    return(
        <>
            <footer className="footer mt-0 p=0">

            <div style={{background: '#868686'}} className=" text-light">
                <div className="container-fluid p-4">
                <div className="row mx-3">
                    <div className="col-lg-4 col-md-12 mb-1">
                    <h5 className="mb-3 text-light">{props.title}</h5>
                    <p>
                        {props.text}
                    </p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-1">
                    <h5 className="mb-3 text-light">Links</h5>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                        <a href="/" style={{color: '#f8f9fa'}}>Home</a>
                        </li>
                        <li className="mb-1">
                        <a href="/services/residential" style={{color: '#f8f9fa'}}>Residential</a>
                        </li>
                        <li className="mb-1">
                        <a href="/services/commercial" style={{color: '#f8f9fa'}}>Commercial</a>
                        </li>
                        <li>
                        <a href="/services/service" style={{color: '#f8f9fa'}}>Service</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-1">
                    <h5 className="mb-1 text-light">Operating hours</h5>
                    <table className="table" style={{border: '#666'}}>
                        <tbody className="text-light">
                        <tr>
                            <td>Mon - Fri:</td>
                            <td>7am - 5pm</td>
                        </tr>
                        <tr>
                            <td>Sat:</td>
                            <td>Appointment Only</td>
                        </tr>
                        <tr>
                            <td>Sun:</td>
                            <td>Closed</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-1">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.066395072821!2d-94.79150768464956!3d38.8995969795703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0958d504322a3%3A0x73b6796dcd196086!2s1800%20E%20Kansas%20City%20Rd%2C%20Olathe%2C%20KS%2066061!5e0!3m2!1sen!2sus!4v1636651770613!5m2!1sen!2sus"
                         width="300" height="150" style={{border:0}} allowFullScreen="" loading="lazy" title="map"></iframe>
                    </div>
                </div>
                </div>
                <div className="text-center p-3" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
                © 2020 Copyright:
                <a className="text-light" href="https://github.com/justinyates887/"> Associated Pools Inc. | Developed by Justin Yates</a>
                </div>
            </div>
            </footer>
        </>
    )
}
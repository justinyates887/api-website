import React from "react";

export function Footer (){
    return(
        <>
            <footer className="footer mt-0 p=0">

            <div style={{background: '#868686'}} className=" text-light">
                <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-1">
                    <h5 className="mb-3 text-light">Here for you...</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                        voluptatem veniam, est atque cumque eum delectus sint!
                    </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-1">
                    <h5 className="mb-3 text-light">Links</h5>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                        <a href="/" style={{color: '#f8f9fa'}}>Home</a>
                        </li>
                        <li className="mb-1">
                        <a href="#!" style={{color: '#f8f9fa'}}>Residential</a>
                        </li>
                        <li className="mb-1">
                        <a href="#!" style={{color: '#f8f9fa'}}>Commercial</a>
                        </li>
                        <li>
                        <a href="#!" style={{color: '#f8f9fa'}}>Service</a>
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
                            <td>8am - 3pm</td>
                        </tr>
                        <tr>
                            <td>Sun:</td>
                            <td>Closed</td>
                        </tr>
                        </tbody>
                    </table>
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
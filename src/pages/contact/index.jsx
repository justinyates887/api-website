import React from "react";
import { NavHeader, Footer, Loading } from "../../components";

export function Contact({ History }) {
    
    const [loading, setLoading] = React.useState(true);

    React.useEffect( () => {
        setLoading(false);
    }, [])

    return (
        <>
        {loading ? (
            <Loading />
        ) : (
            <div id="contact">
            <NavHeader />

            <div className="row mt-5">
                <div className="col text-light text-center">
                    <h1>Give Us A Shout</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-sm-12 text-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="lightBlue" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <p className="text-light mt-4">
                        <strong>Address: </strong>
                        1800 E. Kasnas City Rd. <br/>
                        Olathe, KS 66061
                    </p>
                </div>
                <div className="col-md-4 col-sm-12 text-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="lightBlue" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <p className="text-light mt-4">
                        <strong>Phone: </strong>
                        <a href="(913)-888-7946" className="text-light">(913)-888-7946</a>
                    </p>
                </div>
                <div className="col-md-4 col-sm-12 text-center mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="lightBlue" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                      <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z"/>
                    </svg>
                    <p className="text-light mt-4">
                        <strong>E-Mail: </strong>
                        <a href="mailto:info@associatedpoolsinc.com" className="text-light">info@associatedpoolsinc.com</a>
                    </p>
                </div>
            </div>


                <div className="card" style={{width: '90%'}}>
                    <div className="row">

                        <div className="col-md-6 col-sm-12">
                            <h5 className="card-title">Still In Doubt?</h5>
                            <h6 className="card-subtitle mb-4 text-muted">Hear What Our Customers Have To Say</h6>
                            <div className="scroll-area-sm">
                                <div style={{position: 'static'}} className="ps ps--active-y">
                                    <div className="ps-content">
                                        <p>With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.</p>
                                        <p>With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.</p>
                                        <p>With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.With the increase demand of online customers. I had to take my business online. BBBootstrap Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12 mt-3">
                            <h2 className="mb-5">Give Us A Shout</h2>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="col-12 mb-3">
                                <label for="inputAddress" className="form-label">Project Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-12 mb-3">
                                <label for="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>KS</option>
                                <option>MO</option>
                                </select>
                            </div>
                            <div className="col-md-2 mb-3">
                                <label for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">What are you looking for?</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>

            <Footer />
            </div>
        )}
        </>
    )
}
import React from "react";
import { NavHeader, Loading, Footer } from "../../components";
import home from '../../assets/img/home.mp4'
import CookieConsent from "react-cookie-consent";

export function Home({ History }) {

    const [loading, setLoading] = React.useState(true);

    React.useEffect( () => {
        setLoading(false);
    }, [])

    return (
        <>
        {loading? (
            <Loading />
        ) : (
            <>
                <NavHeader />
                <div className="container-fluid m-0 p-0" id="home" style={{minHeight: '100vh'}}>
                    <div className="row mb-0 p-0">
                        <div className="col">
                            <div className="home-img-wrapper">
                                <video loop autoPlay={true} muted={true} className="mt-auto vid-responsive">
                                    <source src={home} />
                                    Browser does not support video.
                                </video>
                            </div>

                        <div className="home-img-overlay text-light" style={{width: '100%', height: '90%'}}>
                                <h1 className="d-inline h1" style={{fontSize: "4vw"}}>Associated Pools Inc.</h1>
                                <h2 className="card-title mt-3 mb-3"style={{fontSize: "2vw"}}>Crafting your pools since 1984</h2>
                                <h3 className="card-text mb-5" style={{fontSize: "1vw"}}>Over 30 years of designing and creating your dream outdoor living space.</h3>
                                <a href="/services/residential" className="button mt-5" name="Gallery Link">
                                    <span>Get Inspired</span>
                                    <i></i>
                                </a>
                        </div>
                        </div>
                    </div>
                    <CookieConsent
                        location="bottom"
                        buttonText="Agree"
                        style={{ background: "#0073de", textAlign: "center" }}
                        buttonStyle={{ background: "#bfd8fa", fontSize: "13px" }}
                        expires={150}
                    >
                        This website uses only necessary cookies. We do not track or sell <strong>ANY</strong> personal data.
                    </CookieConsent>
                    <CookieConsent
                        location="bottom"
                        buttonText="Okay"
                        style={{ background: "gray", textAlign: "center" }}
                        buttonStyle={{ background: "#bfd8fa", fontSize: "13px" }}
                        expires={150}
                    >
                        For the best experience, please view on a full-size browser.
                    </CookieConsent>
                </div>

                <Footer 
                    className="mt-auto"
                    title="Associated Pools Inc"
                    text="Welcome to Associated Pools Inc! We have been providing top-quality swimming pool 
                        design and construction services for over 20 years. Our team of experienced professionals is 
                        dedicated to creating the perfect pool for your home or commercial property. Contact us today 
                        to schedule a consultation and start your pool project!"
                />
           </>
        )}
        </>
    )
}
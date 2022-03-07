import React from "react";
import { NavHeader, Loading, Footer } from "../../components";
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
                <div className="container-fluid m-0 p-0 ">
                    <div className="row mb-0 p-0">
                        <div className="col">
                            <div className="img-wrapper">
                                <video loop autoPlay={true} muted={true} className="mt-auto vid-responsive">
                                    <source src="https://ik.imagekit.io/associatedpoolsinc/API/home-vid_xhOx_wDbEaZ.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1643979914431" />
                                    Browser does not support video.
                                </video>
                            </div>

                        <div className="img-overlay text-light" style={{width: '100%', height: '90%'}}>
                                <h1 className="d-inline h1" style={{fontSize: "4vw"}}>Associated Pools Inc.</h1>
                                <h2 className="card-title mt-5 mb-3"style={{fontSize: "2vw"}}>Making you wet since 1984</h2>
                                <h5 className="card-text mb-5" style={{fontSize: "1vw"}}>Over 30 years of designing and creating your dream outdoor living space.</h5>
                                <a href="/services/resedential" className="btn btn-primary">Get Inspired</a>
                        </div>
                        </div>
                    </div>
                    <CookieConsent
                        location="bottom"
                        buttonText="Agree"
                        style={{ background: "#2d4957" }}
                        buttonStyle={{ background: "#bfd8fa", fontSize: "13px" }}
                        expires={150}
                    >
                        This website uses only necessary cookies. We do not track or sell <strong>ANY</strong> personal data.
                    </CookieConsent>
                </div>

                <Footer className="mt-auto"/>
           </>
        )}
        </>
    )
}
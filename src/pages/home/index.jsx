import React from "react";
import { NavHeader, Loading, Footer } from "../../components";
import homeVideo from '../../assets/img/home-vid.mp4'

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
                <div className="container-fluid m-0 p-0">
                    <div className="row ">
                        <div className="col">
                            <div className="img-wrapper">
                                <video loop height="50%" autoPlay={true} muted={true} className="mt-auto img-responsive">
                                    <source src={ homeVideo } />
                                    Browser does not support video.
                                </video>
                            </div>

                        <div className="card img-overlay text-light filter-dark" style={{width: '100%', height: '100%'}}>
                            <div className="card-body position-absolute top-50 start-50 translate-middle">
                                <h1 className="d-inline h1">Associated Pools Inc.</h1>
                                <h2 className="card-title mt-5 mb-3">Making you wet since 1984</h2>
                                <h5 className="card-text mb-5">Over 30 years of designing and creating your dream outdoor living space.</h5>
                                <a href="/services/resedential" className="btn btn-primary">Get Inspired</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                <Footer className="mt-auto"/>
           </>
        )}
        </>
    )
}